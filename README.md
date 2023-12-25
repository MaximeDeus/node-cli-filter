# node-cli-filter
A command-line interface in Node.js to filter and count a specific list of elements based on a pattern.

## Getting Started

For being able to use this program, [NodeJS](https://nodejs.org) is required.

## Installation

```sh
npm install
```

## Usage

```bash
node app.js [...options]
```

| Option            | Description                                       |
|-------------------|---------------------------------------------------|
| `--help`          | Summary of program usage and available options    |
| `--filter[value]` | Filter by animals matching name's value           |
| `--count`         | Add counter next to countries and people's names  |

### Basic examples

*Note: all data are stored in [sampleData](https://github.com/MaximeDeus/node-cli-filter/blob/master/data/sampleData.js) file*

```bash
# Show usage and options
node app.js --help

# Show countries and people where animal's name contains 'ze' (ex: Gazelle) 
node app.js --filter=ze

# Add counter next to countries and people's names 
node app.js --count

# Filter and count options can be combined 
node app.js --filter=ze --count
```

### Test

```sh
npm run test
```
