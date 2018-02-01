package components

import (
	"io"

	"html/template"
)

// defaultFont is a list of system fonts.
const defaultFont = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

// helper functions.
var helpers = template.FuncMap{
	"default": getDefault,
}

// tmpls is the components available for rendering.
var tmpls = template.Must(template.New("").Funcs(helpers).ParseGlob("components/*.svg"))

// Config is the configuration variables for a component.
type Config map[string]interface{}

// Render a component by name with the given config.
func Render(w io.Writer, name string, c Config) error {
	if _, ok := c["font"]; !ok {
		c["font"] = defaultFont
	}

	return tmpls.ExecuteTemplate(w, name+".svg", c)
}

// getDefault returns a or b.
func getDefault(a, b string) string {
	if a == "" {
		return b
	}
	return a
}
