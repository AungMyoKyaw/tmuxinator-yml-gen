# tmuxinator-yml-gen

> tmuxinator-yml-gen

## Use Case

imagine your work need to check on 10+ project and switching across project</br>
creating tmuxinator yaml for 10+ project folder is boring task</br>
here is my way of creating tmuxinator yaml</br>
may be it is not needed and u are using better solution</br>
i hope it may help u ❄️

## Install

```shell
npm install -g tmuxinator-yml-gen
```

## Usage

_first switch to project list root folder_

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

```shell
Usage
  $ tmuxinator-yml-gen
Options
  --name
  --editor
Examples
  $ tmuxinator-yml-gen --name=amk --editor=vim
```

_generated yaml file will be place on current dir of `tmuxinator-yml-gen` folder_

_u may need to copy yaml file to `~/.tmuxinator` folder_

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
