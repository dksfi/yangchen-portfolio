const projects = {
  "emg": {
    "id": "emg",
    "num": "01",
    "category": "实时采集 / 边缘处理",
    "date": "2025.12 — 2026.01",
    "title": "多节点肌电信号实时采集<br>与边缘处理系统",
    "plain": "多节点肌电信号实时采集与边缘处理系统",
    "role": "边缘计算系统开发",
    "summary": "以 ESP32 连接感知节点、网关与移动端，处理连续采集、无线汇聚与高频小包阻塞。",
    "tags": [
      "ESP32",
      "ESP-NOW / BLE",
      "数字滤波"
    ],
    "proof": "500 Hz 采集 · 项目记录平均延迟 24 → 8 ms",
    "background": "多节点 EMG（肌电）与 IMU（惯性测量）数据需要持续采集、处理和传输。高频小包容易阻塞通信，连续数据也带来缓存、存储与无线带宽压力。",
    "work": [
      "基于 ESP32 开发采集与边缘处理，以 500 Hz、2 ms 周期进行 ADC 采集，使用环形缓冲区管理连续数据。",
      "实现陷波、高通、低通、卡尔曼滤波及特征提取。",
      "设计“感知节点—网关—移动端”三级链路：ESP-NOW 汇聚，网关异步聚合，再通过 BLE 传输到移动端。",
      "设计分层采集与低频上报策略，并对连续 IMU 数据使用 Delta Encoding（差分编码）。"
    ],
    "technology": "ESP32 · ADC · EMG / IMU · ESP-NOW · BLE · 环形缓冲区 · 数字滤波 · Delta Encoding",
    "problem": "用连续缓存承接高频采样，用异步聚合和低频上报减少高频小包阻塞，用差分编码降低连续数据的传输开销。",
    "result": "项目记录：平均传输延迟由 24 ms 降至 8 ms，丢包率由 4.2% 降至 0.3%，单节点带宽占用降低 42%。",
    "note": "以上为简历中的项目实测记录；简历未提供节点数量、传输距离、测试时长等条件。指标描述项目结果，不代表全部工作由我独立完成。"
  },
  "flight": {
    "id": "flight",
    "num": "02",
    "category": "嵌入式开发 / 闭环控制",
    "date": "2025.05 — 2025.06",
    "title": "四旋翼无人机<br>飞控系统",
    "plain": "四旋翼无人机飞控系统",
    "role": "嵌入式开发",
    "summary": "从遥控接收、传感器驱动到姿态解算与串级 PID，完成飞控状态管理和控制曲线调试。",
    "tags": [
      "STM32F407",
      "C / Keil",
      "四元数 / PID"
    ],
    "proof": "完成平稳悬停 · VOFA+ 实时波形调试",
    "background": "四旋翼飞控需要协调自检、解锁、悬停与失控保护，同时稳定接收遥控数据、估计姿态并执行控制闭环。",
    "work": [
      "基于 STM32F407 与 Keil 开发，以 FSM（有限状态机）管理自检、解锁、悬停和失控保护，结合分时复用任务调度。",
      "编写 SPI / I2C 传感器驱动，使用 DMA、串口空闲中断及无锁环形缓冲区解析遥控数据。",
      "以 C 实现四元数姿态解算、角度—角速度串级 PID 和积分抗饱和。",
      "使用 VOFA+ 抓取实时波形、分析控制曲线，针对姿态漂移与响应滞后进行调试。"
    ],
    "technology": "STM32F407 · C · Keil · FSM · SPI / I2C · DMA / UART · 无锁环形缓冲区 · 四元数 · 串级 PID · VOFA+",
    "problem": "通过姿态解算和控制参数调试处理漂移与响应滞后；借助 DMA 等机制减少遥控接收的数据搬运负担。",
    "result": "简历记录完成平稳悬停并改善控制响应，同时减少 CPU 数据处理开销。",
    "note": "简历未给出悬停误差、响应时延或 CPU 占用率的量化记录；此处不作数值推断。"
  },
  "circuit": {
    "id": "circuit",
    "num": "03",
    "category": "电子设计 / 信号分析",
    "date": "2025.08",
    "title": "电路模型探究装置",
    "plain": "电路模型探究装置",
    "role": "单片机编程",
    "summary": "围绕电子设计竞赛 G 题，打通信号激励、连续采样、扫频识别与模型重构。",
    "tags": [
      "STM32F407ZET6",
      "AD9833",
      "FFT / IFFT"
    ],
    "proof": "100 Hz—1 MHz 信号生成 · 连续采样与扫频",
    "background": "全国大学生电子设计竞赛 G 题，需要围绕电路激励、数据采样、扫频、特性识别和模型重构完成装置开发。",
    "work": [
      "基于 STM32F407ZET6 搭建主控，开发 AD9833 信号发生、ADC + DMA 数据采集及 UART 串口屏交互模块。",
      "通过 SPI 配置 AD9833，完成 100 Hz—1 MHz 正弦信号生成及频率、幅度控制。",
      "通过 DMA 实现 ADC 连续采样，开发扫频、幅度提取和滤波器类型识别。",
      "实现 FFT / IFFT 建模重构，使用 FPU 进行信号计算。"
    ],
    "technology": "STM32F407ZET6 · AD9833 · SPI · ADC / DMA · UART · FFT / IFFT · FPU",
    "problem": "协调信号激励、数据采集、分析计算与屏幕交互；使用 DMA 减少连续采样的数据搬运开销。",
    "result": "完成信号发生、连续采样、串口屏交互、扫频、滤波器识别和建模重构功能。",
    "note": "100 Hz—1 MHz 为简历记载的信号生成范围，不等同于采样率或测量精度。简历未明确该项目与竞赛奖项的对应关系。"
  },
  "vtol": {
    "id": "vtol",
    "num": "04",
    "category": "平台集成 / 整机联调",
    "date": "2025.06 — 2025.07",
    "title": "VTOL 垂直起降固定翼",
    "plain": "VTOL 垂直起降固定翼",
    "role": "嵌入式开发",
    "summary": "基于 F405 Wing V2 与 ArduPilot，完成尾座式飞控配置、执行机构映射和整机联调。",
    "tags": [
      "ArduPilot",
      "F405 Wing V2",
      "参数整定"
    ],
    "proof": "飞控配置 · 混控与保护参数 · 模块集成",
    "background": "尾座式 VTOL 需要在悬停、垂直起降、过渡与固定翼巡航等状态间协调执行机构及控制参数。",
    "work": [
      "基于 CoreWing 酷翼 F405 Wing V2 与 ArduPilot 搭建飞控系统。",
      "负责飞控配置、执行机构映射及整机联调，集成电机、电调、舵机和 GPS。",
      "针对不同飞行状态整定姿态、油门以及固定翼俯仰、滚转参数。",
      "配置飞行模式切换、执行机构混控和相关保护参数。"
    ],
    "technology": "ArduPilot · CoreWing F405 Wing V2 · 电机 / 电调 / 舵机 · GPS · 参数整定 · 执行机构混控",
    "problem": "面向多种飞行状态，协调控制响应、执行机构映射与稳定性相关参数。",
    "result": "完成模块集成、飞控配置、整机联调及模式切换、混控和保护参数配置。",
    "note": "这是基于 ArduPilot 既有平台的配置与集成经历；未将其表述为从零自研飞控算法。"
  },
  "robot": {
    "id": "robot",
    "num": "05",
    "category": "机器人 / 运动控制",
    "date": "2025.07 — 2025.08",
    "title": "轮腿复合机器人",
    "plain": "轮腿复合机器人",
    "role": "嵌入式开发",
    "summary": "以 C++ 实现轮腿模式切换与六足爬行控制，协调姿态检测、舵机驱动和三角步态。",
    "tags": [
      "C++",
      "舵机控制",
      "姿态传感器"
    ],
    "proof": "轮腿模式自动切换 · 三角步态参数验证",
    "background": "轮腿复合机器人需要根据地形和坡度选择运动方式，并协调多关节舵机完成运动。",
    "work": [
      "集成舵机控制系统与姿态传感器，完成三关节舵机协调驱动。",
      "以 C++ 开发轮式、腿式模式切换与六足爬行控制。",
      "设计坡度检测和模式切换逻辑，调试三角步态并验证参数。"
    ],
    "technology": "C++ · 舵机协调驱动 · 姿态传感器 · 坡度检测 · 运动模式切换 · 三角步态",
    "problem": "根据地形变化切换运动模式，协调多个舵机的运动与步态参数。",
    "result": "完成轮腿模式自动切换、六足爬行控制及步态参数验证。",
    "note": "简历未给出速度、载重、越障高度或坡度阈值，不补写性能指标。"
  },
  "modeling-demo": {
    "num": "LEARNING",
    "plain": "几何误差：可能区域如何变化？",
    "role": "学习概念演示",
    "date": "",
    "background": "固定观测方向与示意距离，调整方向误差上界，观察目标可能区域随之变化。",
    "note": "这是用于理解概念的交互示意，不是简历项目、真实观测、实验结果或完整覆盖证明。",
    "demo": "<div class=\"demo\"><div class=\"demo-controls\"><label for=\"error-range\">方向误差上界 ±</label><input id=\"error-range\" type=\"range\" min=\"5\" max=\"35\" value=\"15\" step=\"1\"><output for=\"error-range\" id=\"error-value\">15°</output></div><svg viewBox=\"0 0 460 270\" role=\"img\" aria-label=\"方向误差增大时，扇形可能区域随之扩大\"><path d=\"M60 175H428M60 260V15\" stroke=\"#456551\" stroke-width=\"1\"/><path id=\"error-sector\" fill=\"#b9d293\" fill-opacity=\".18\" stroke=\"#cbe1a3\" stroke-width=\"1.5\"/><path d=\"M60 175 285 127\" stroke=\"#809b6d\" stroke-dasharray=\"4 5\"/><circle cx=\"60\" cy=\"175\" r=\"4\" fill=\"#d8e8b7\"/><text x=\"28\" y=\"201\">检测点</text><text x=\"304\" y=\"230\">目标可能区域</text><text x=\"310\" y=\"122\">观测方向</text></svg><p class=\"demo-caption\">概念演示：固定示意距离，非真实观测、实验数据或完整覆盖证明。</p></div>"
  }
};
const topics = {
 signals: {icon:'∿',label:'SIGNALS & CONTROL',title:'从信号变化，理解系统响应。',description:'围绕滤波、采样、频域分析和 PID 控制整理基础原理，与肌电采集、电路模型和飞控项目中的方法对应。',records:['模拟电子技术 · 数字电子技术']},
 systems: {icon:'⌘',label:'COMPUTER FUNDAMENTALS',title:'从数据结构，到程序运行。',description:'继续梳理数据结构、操作系统与计算机网络基础，把缓存、调度和通信中的问题放回原理中理解。',records:['C++ · 数据结构 · 系统与网络基础']},
 edge: {icon:'↳',label:'EDGE LEARNING',title:'围绕端侧资源，继续提问。',description:'以现有 EMG / IMU 采集和边缘处理经历为起点，关注 TinyML 中的模型开销、数据质量与部署约束。',records:['学习关注方向 · 未作为已完成科研成果展示']}
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTopic(tab) {
 const topic=topics[tab.dataset.topic];
 tabs.forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;});
 const panel=document.querySelector('#learning-content'); panel.setAttribute('aria-labelledby',tab.id);
 panel.innerHTML=`<div class="learning-heading"><span class="learning-icon" aria-hidden="true">${topic.icon}</span><span class="mono">${topic.label}</span></div><h3>${topic.title}</h3><p class="learning-description">${topic.description}</p><div class="learning-record"><span>学习索引</span>${topic.records.map(x=>`<strong>${x}</strong>`).join('')}</div>`;
}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>activateTopic(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();activateTopic(tabs[next]);tabs[next].focus();}});});
const dialog=document.querySelector('#project-dialog');let previousFocus=null;
function updateSector(){const slider=document.querySelector('#error-range');if(!slider)return;const error=Number(slider.value),direction=-12*Math.PI/180,radius=230,angle=error*Math.PI/180;const start=[60+radius*Math.cos(direction-angle),175+radius*Math.sin(direction-angle)],end=[60+radius*Math.cos(direction+angle),175+radius*Math.sin(direction+angle)];document.querySelector('#error-sector').setAttribute('d',`M60 175 L${start[0]} ${start[1]} A${radius} ${radius} 0 0 1 ${end[0]} ${end[1]} Z`);document.querySelector('#error-value').textContent=`${error}°`;slider.setAttribute('aria-valuetext',`正负 ${error} 度`);}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const p=projects[button.dataset.project];previousFocus=button;
 document.querySelector('#dialog-kicker').textContent=p.num==='LEARNING'?'LEARNING / CONCEPT DEMO':`PROJECT ${p.num} / ${p.date}`;
 document.querySelector('#dialog-title').textContent=p.plain;
 document.querySelector('#dialog-intro').textContent=`${p.role}${p.demo?'':' · 个人工作与项目结果分列如下'}`;
 document.querySelector('#dialog-body').innerHTML=p.demo?`<div class="detail-block"><h3>概念说明</h3><p>${p.background}</p>${p.demo}</div>`:`<div class="detail-block"><h3>项目背景</h3><p>${p.background}</p></div><div class="detail-block"><h3>我的工作</h3><ul>${p.work.map(w=>`<li>${w}</li>`).join('')}</ul></div><div class="detail-block"><h3>关键技术</h3><p>${p.technology}</p></div><div class="detail-block"><h3>解决的问题</h3><p>${p.problem}</p></div><div class="detail-block result-block"><h3>项目结果</h3><p>${p.result}</p></div>`;
 document.querySelector('#material-status').textContent=p.note;
 document.querySelector('#bottom-close').textContent=p.demo?'返回学习记录':'返回项目列表';
 dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';document.querySelector('#close-dialog').focus({preventScroll:true});
 const slider=document.querySelector('#error-range');if(slider){slider.addEventListener('input',updateSector);updateSector();}
}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());document.querySelector('#bottom-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus({preventScroll:true});});
