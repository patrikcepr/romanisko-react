# Udržování changelogu v projektech

_Tohle je výstup z [general#345](https://gitlab.com/operator-ict/golemio/code/general/-/issues/345)_

Začínáme zavádět changelogy podle [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) a semantického verzování

```markdown
## [version] - release date

### type of action

- Description (([project#issue](link to the issue)))
```

- Během vývoje a code reviews je potřeba kontrolovat existenci CHANGELOG.md a zda byl přidán záznam do Unreleased sekce pod správný typ změny
  - Added
  - Changed
  - Deprecated
  - Removed
  - Fixed
  - Security
- Rovněž je potřeba ujistit, že aktuální kopie [keeping_a_changelog.md](/introduction/keeping_a_changelog.md) se nachází ve složce _docs/_, pokud tam už není
- Před releasem nahradit Unreleased za _[version] - release date_
- Po release bumpnout verzi a přidat novou Unreleased sekci (v případě částečného release přesunout nenasazené změny do Unreleased)

**Příklad changelogu pro pid modul**

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Modularized migrations ([pid#53](https://gitlab.com/operator-ict/golemio/code/modules/pid/-/issues/53))

## [2.0.12] - 2021-10-18

### Fixed

- Empty array of tripsIds in updateDelay
```

**Příklad projektů se zavedeným changelogem**

- [Golemio CLI](https://gitlab.com/operator-ict/golemio/code/golemio-cli/-/blob/development/CHANGELOG.md)
- [PID Module](https://gitlab.com/operator-ict/golemio/code/modules/pid/-/blob/development/CHANGELOG.md)
