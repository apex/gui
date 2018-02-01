package main

import (
	"os"

	"github.com/apex/gui/components"
)

func main() {
	components.Render(os.Stdout, "ShadowButton", components.Config{
		"text": "SUBSCRIBE",
	})
}
