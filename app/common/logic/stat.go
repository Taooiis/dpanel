package logic

import (
	"encoding/json"
	"github.com/docker/go-units"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/donknap/dpanel/common/service/exec"
	"strconv"
	"strings"
)

type Stat struct {
}

type statItemResult struct {
	Cpu       float64      `json:"cpu"`
	Memory    float64      `json:"memory"`
	BlockIO   ioItemResult `json:"blockIO"`
	NetworkIO ioItemResult `json:"networkIO"`
	Name      string       `json:"name"`
}

type ioItemResult struct {
	In  int64 `json:"in"`
	Out int64 `json:"out"`
}

func (self Stat) GetStat() ([]*statItemResult, error) {
	result := make([]*statItemResult, 0)
	host := docker.Sdk.Client.DaemonHost()
	response := exec.Command{}.RunWithOut(&exec.RunCommandOption{
		CmdName: "docker",
		CmdArgs: []string{
			"-H", host,
			"stats", "-a",
			"--format", "json",
			"--no-stream",
		},
	})

	statJsonItem := struct {
		BlockIO  string
		CPUPerc  string
		MemPerc  string
		MemUsage string
		NetIO    string
		Name     string
	}{}
	for _, item := range strings.Split(response, "\n") {
		if item == "" || !strings.Contains(item, "\"Name\":") {
			continue
		}
		err := json.Unmarshal([]byte(item), &statJsonItem)
		if err != nil {
			return nil, err
		}
		r := &statItemResult{
			Name: statJsonItem.Name,
		}
		cpu, _ := strconv.ParseFloat(strings.TrimSuffix(statJsonItem.CPUPerc, "%"), 64)
		r.Cpu += cpu

		memory, _ := strconv.ParseFloat(strings.TrimSuffix(statJsonItem.MemPerc, "%"), 64)
		r.Memory += memory

		networkIo := strings.Split(statJsonItem.NetIO, "/")
		in, _ := units.RAMInBytes(strings.TrimSpace(networkIo[0]))
		out, _ := units.RAMInBytes(strings.TrimSpace(networkIo[1]))

		r.NetworkIO.In += in
		r.NetworkIO.Out += out

		blockIo := strings.Split(statJsonItem.BlockIO, "/")
		in, _ = units.RAMInBytes(strings.TrimSpace(blockIo[0]))
		out, _ = units.RAMInBytes(strings.TrimSpace(blockIo[1]))

		r.BlockIO.In += in
		r.BlockIO.Out += out

		result = append(result, r)
	}

	return result, nil

}
