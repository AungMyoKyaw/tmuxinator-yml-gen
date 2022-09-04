# tmuxinator-yml-gen

> tmuxinator yaml file generator

## Use Case

- imagine your work need to check on 10+ project and switching across project
- tired of creating tmuxinator yaml for 10+ project folder
- here is my way of creating tmuxinator yaml
- may be u are using better solution</br>
- i hope it may help u ❄️

<img src="./assets/demo.gif" align="center" alt="tmuxinator-yml-gen" width="100%"/>

## Install

```shell
npm install -g tmuxinator-yml-gen
```

## Usage

_switch to project list root folder_

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
  $ mx-yml-gen
Options
  --name
  --editor
  --cp [copy to config]
Examples
  $ mx-yml-gen --name=amk --editor=vim --cp=true
```

_generated yaml file will be place on current dir of `tmuxinator-yml-gen` folder_

_u may need to copy yaml file to `~/.tmuxinator` folder or use --cp=true option_

## ကျွန်ုပ် အသုံးပြုပုံ

- work folder ထဲမှာ system အလိုက် folder တွေ ဆောက်ထားတယ်။
- ဥပမာ system1 , system2 အစ ရှိ သဖြင့်
- system folder ထဲမှာ repo တွေ ရှိတယ်
- api repo တို့ front end repo တို့ tool repo တို့ အစ ရှိသဖြင့်
- အဲ့တော့ အရင် ဆုံး work ထဲကို `cd ~/Desktop/work` ဘာ ညာ ဆိုပြီးတော့ ဝင်လိုက်တယ်။
- ပြီးတော့ အခု bash function လေးကို run လိုက်တယ်။

```bash
mxgen(){
for file in *; do
  if [ -d "$file" ]; then
    filenamelowercase=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    cd $file
    mx-yml-gen --name=${filenamelowercase} --cp=true --mode=amk --editor=none
    cd ..
    echo $filenamelowercase
  fi
done
}
```

- အဲ့တာ ဆိုရင် ကိုယ် က system1 ကို ဖွင့် ကြည့်ချင် တယ် ဆိုရင်
- `mx system1` လို့ ရိုက် ထည့်လိုက် တာ နဲ့ system1 နဲ့ ဆိုင် တဲ့ repo တွေ အကုန် ကျလာမယ်။
- ကိုယ် ကြည့်ချင်တာ ကြည့် ပေါ့ ။

_oki လား ညီမလေး။_

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
