# tmuxinator-yml-gen

> **Tmuxinator YAML file generator**

## Use Case

- If your work requires you to check on 10+ projects and switch between them frequently.
- Tired of manually creating Tmuxinator YAML files for multiple project folders?
- Here’s a simple way to generate Tmuxinator YAML files automatically.
- You might already have a better solution, but I hope this helps you ❄️

<img src="./assets/demo.gif" align="center" alt="tmuxinator-yml-gen" width="100%"/>

## Installation

```shell
npm install -g tmuxinator-yml-gen
```

## Usage

Switch to the root folder containing your project directories:

```
.
├── project-1
├── project-10
├── project-2
├── project-3
├── project-4
├── project-5
├── project-6
├── project-7
├── project-8
└── project-9
```

Run the following command:

```shell
mx-yml-gen --name=project-1 --editor=nvim --cp=true
```

```shell
Usage:
  $ mx-yml-gen
Options:
  --name    [Specify the session name]
  --editor  [Specify the editor to use]
  --cp      [Copy the generated file to the tmuxinator config folder]
Examples:
  $ mx-yml-gen --name=amk --editor=vim --cp=true
```

The generated YAML file will be placed in the `tmuxinator-yml-gen` folder in the current directory.

You may need to copy the YAML file manually to `~/.tmuxinator`, or use the `--cp=true` option to automate this process.

## My Use Case

For batch generation of YAML files for all projects in a directory, you can use the following shell function:

```bash
mxgen() {
  for file in *; do
    if [ -d "$file" ]; then
      filenamelowercase=$(echo "$file" | tr '[:upper:]' '[:lower:]')
      cd "$file"
      mx-yml-gen --name=${filenamelowercase} --cp=true --mode=amk --editor=none
      cd ..
      echo "$filenamelowercase"
    fi
  done
}
```

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
