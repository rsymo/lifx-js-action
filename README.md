# LIFX JS Action

A GitHub Action that controls a [LIFX](https://www.lifx.com/) smart bulb, turning it into a build light for your repository. Set the bulb colour on success, failure, or any workflow event.

## Inputs

| Input | Description | Required | Default |
|---|---|---|---|
| `LIFX_BULB_ID` | The ID of the LIFX bulb to control | Yes | — |
| `LIFX_TOKEN` | Your LIFX API personal access token | Yes | — |
| `COLOUR` | The colour to set the bulb (e.g. `green`, `red`, `blue`, `black` to turn off) | Yes | `blue` |

## Usage

```yaml
- name: Set build light
  uses: rsymo/lifx-js-action@main
  with:
    LIFX_BULB_ID: ${{ secrets.LIFX_BULB_ID }}
    LIFX_TOKEN: ${{ secrets.LIFX_TOKEN }}
    COLOUR: green
```

### Example — build status light

```yaml
name: Build Light

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # ... your build steps ...

      - name: Build succeeded
        if: success()
        uses: rsymo/lifx-js-action@main
        with:
          LIFX_BULB_ID: ${{ secrets.LIFX_BULB_ID }}
          LIFX_TOKEN: ${{ secrets.LIFX_TOKEN }}
          COLOUR: green

      - name: Build failed
        if: failure()
        uses: rsymo/lifx-js-action@main
        with:
          LIFX_BULB_ID: ${{ secrets.LIFX_BULB_ID }}
          LIFX_TOKEN: ${{ secrets.LIFX_TOKEN }}
          COLOUR: red
```

### Turning the light off

Set `COLOUR` to `black` to power off the bulb:

```yaml
- uses: rsymo/lifx-js-action@main
  with:
    LIFX_BULB_ID: ${{ secrets.LIFX_BULB_ID }}
    LIFX_TOKEN: ${{ secrets.LIFX_TOKEN }}
    COLOUR: black
```

## Setup

1. Get your LIFX personal access token from [https://cloud.lifx.com/settings](https://cloud.lifx.com/settings).
2. Find your bulb ID using the [LIFX API](https://api.lifx.com/v1/lights/all) with your token.
3. Add `LIFX_BULB_ID` and `LIFX_TOKEN` as [repository secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).

## License

[ISC](LICENSE)
