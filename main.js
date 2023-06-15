function generateKeyframes() {
  const textInput = document.getElementById("textInput").value.trim();
  const output = document.getElementById("output");
  const output1 = document.getElementById("output1");
  const name_keyf = document.getElementById("name__keyf").value;
  const animation_edit = document.getElementById("anim_edit");
  const color_choose = document.getElementById("color__choose").value;
  const set_color = document.getElementById("set__color");
  
  
  output.textContent = "@keyframes " + `${name_keyf}` + "{\n";
  animation_edit.innerText = name_keyf;
  output1.innerText = textInput;
  set_color.innerText = color_choose;
  
  let currentIndex = 0;
  for (let i = 0; i <= textInput.length; i++) {
    const keyframe = `\t${currentIndex}%{content: "${textInput.slice(0, i)}";}\n`;
    output.textContent += keyframe;
    currentIndex++;
  }
  output.textContent += "}\n\n";
}

function classNameEdit(){
  const class_name = document.getElementById("className").value;
  const set_name = document.getElementById("out__class__name");
  const set_name1 = document.getElementById("out__class__name1");
  const set_name2 = document.getElementById("out__class__name2");
  const link__text = document.getElementById("link__text");
  
  set_name.innerText = "\n." + class_name + " {";
  set_name1.innerText = "\n." + class_name + "::before {";
  set_name2.innerText = "\n." + class_name + "::after {";
  
  link__text.innerText = '&nbsp;<span class="' + `${class_name}` + '"></span>\n\n'
}
