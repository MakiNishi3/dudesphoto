const root=document.createElement("div");document.body.appendChild(root);document.body.style.margin="0";document.body.style.background="#ffffff";document.body.style.fontFamily="sans-serif";

const box=document.createElement("div");box.style.padding="20px";box.style.display="flex";box.style.flexDirection="column";box.style.gap="12px";root.appendChild(box);

const textarea=document.createElement("textarea");textarea.style.width="100%";textarea.style.height="100px";textarea.style.border="1px solid #ccc";textarea.style.outline="none";textarea.style.padding="10px";textarea.style.color="#000";textarea.style.background="#fff";box.appendChild(textarea);

const color=document.createElement("input");color.type="color";color.value="#ffffff";color.style.width="100%";color.style.height="40px";color.style.border="1px solid #ccc";box.appendChild(color);

const range=document.createElement("input");range.type="range";range.min="0";range.max="100";range.value="50";range.style.width="100%";range.style.accentColor="#ffffff";box.appendChild(range);

const checkbox=document.createElement("input");checkbox.type="checkbox";checkbox.style.width="20px";checkbox.style.height="20px";box.appendChild(checkbox);

const label=document.createElement("span");label.textContent="Enable";label.style.color="#000";label.style.marginLeft="8px";

const checkWrap=document.createElement("div");checkWrap.style.display="flex";checkWrap.style.alignItems="center";checkWrap.appendChild(checkbox);checkWrap.appendChild(label);box.appendChild(checkWrap);

const select=document.createElement("select");select.style.width="100%";select.style.height="40px";select.style.border="1px solid #ccc";select.style.background="#fff";select.style.color="#000";

const opt=document.createElement("option");opt.value="html";opt.textContent="html";opt.style.background="#ffffff";select.appendChild(opt);

box.appendChild(select);

