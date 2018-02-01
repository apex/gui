const { h, app } = hyperapp

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const Component = ({ name }) =>
  h("div", { class: "Component" }, [
    h("h1", {}, name)
  ])

const view = (state, actions) =>
  h("div", {}, [
    Component({ name: "FlatButton" }),
    Component({ name: "ShadowButton" })
    // h("h1", {}, state.count),
    // h("button", { onclick: () => actions.down(1) }, "–"),
    // h("button", { onclick: () => actions.up(1) }, "+")
  ])

const main = app(state, actions, view, document.body)
