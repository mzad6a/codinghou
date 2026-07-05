// 版本：1.0.0
// 此扩展由编程侯老师网站的编程星制作
// 使用方法：打开TurboWarp，点击左下角的加载扩展按钮，找到自定义扩展，输入这个扩展的url即可

(function(Scratch) {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        .customInputContainer {
            position: fixed !important;
            overflow: hidden;
            pointer-events: none;
            transition: none !important;
            animation: none !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .customInput {
            all: unset;
            position: absolute;
            border: none;
            outline: none;
            padding: 4px;
            box-sizing: border-box;
            text-align: left;
            transform-origin: center center;
            pointer-events: auto;
            white-space: pre-wrap;
            resize: none;
            line-height: 1.2 !important;
            vertical-align: top !important;
            transition: none !important;
            animation: none !important;
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -ms-transition: none !important;
            -o-transition: none !important;
            
            -ms-overflow-style: none;
            scrollbar-width: none;
            visibility: visible !important;
        }
        .customInput::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(style);

    let inputs = {};
    let stage = null;
    const BASE_Z = 10000;
    const keyState = {
        pressedKeyTime: {},
        focusedInputId: ''
    };
    const KEY_PRESS_DURATION = 200;

    function findStage() {
        const selectors = [
            'div[class^="stage_stage"]',
            'div[class*="stage"]',
            'div[class^="player-stage"]',
            'div[class^="scratch-stage"]',
            'canvas'
        ];

        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    return element;
                }
            }
        }
        return null;
    }

    function forceUpdate() {
        stage = findStage();
        if (!stage) {
            setTimeout(forceUpdate, 50);
            return;
        }

        const stageRect = stage.getBoundingClientRect();
        const scale = stageRect.width / 480;

        for (const id in inputs) {
            const d = inputs[id];
            
            if (d.container.parentNode !== document.body) {
                document.body.appendChild(d.container);
            }

            d.container.style.left = stageRect.left + 'px';
            d.container.style.top = stageRect.top + 'px';
            d.container.style.width = stageRect.width + 'px';
            d.container.style.height = stageRect.height + 'px';
            d.container.style.zIndex = BASE_Z + d.layer;

            const inputW = d.w * scale;
            let inputH;
            let overflowY;
            
            if (d.isFixedHeight) {
                inputH = d.fixedHeight * scale;
                overflowY = 'auto';
            } else {
                d.dom.style.height = 'auto';
                inputH = d.dom.scrollHeight;
                overflowY = 'hidden';
            }

            const inputX = (stageRect.width / 2) + d.x * scale - inputW / 2;
            const inputY = (stageRect.height / 2) + d.y * scale;

            d.dom.style.cssText = `
                left: ${inputX}px;
                top: ${inputY}px;
                width: ${inputW}px;
                height: ${inputH}px;
                font-size: ${d.size * scale}px;
                opacity: ${d.opacity};
                color: ${d.color};
                caret-color: ${d.color};
                transform: rotate(${d.rot - 90}deg);
                z-index: 1;
                overflow-y: ${overflowY};
                overflow-x: hidden;
                background: ${d.showBg ? (d.bgType === '纯色' ? d.bg : (d.bgType === '渐变横向' ? `linear-gradient(90deg,${d.bgStart},${d.bgEnd})` : `linear-gradient(180deg,${d.bgStart},${d.bgEnd})`)) : 'transparent'};
                border: ${d.borderWidth > 0 ? `${d.borderWidth * scale}px solid ${d.borderColor}` : 'none'};
                border-radius: ${d.radius * scale}px;
                display: ${d.show ? 'block' : 'none'} !important;
            `;
        }
    }

    function handleFullscreenChange() {
        forceUpdate();
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    window.addEventListener('resize', handleFullscreenChange);
    window.addEventListener('scroll', handleFullscreenChange);

    function handleKeydown(e) {
        const key = e.key.toLowerCase().trim();
        keyState.pressedKeyTime[key] = Date.now();
        
        if (keyState.focusedInputId) {
            setTimeout(forceUpdate, 0);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleInputChange(e) {
        forceUpdate();
    }

    function update() {
        forceUpdate();
        requestAnimationFrame(update);
    }
    update();

    const extension = {
        getInfo() {
            return {
                id: 'codingStarInput',
                name: '编程星的输入框',
                color1: '#FFB900',
                blocks: [
                    {opcode: 'create',blockType: Scratch.BlockType.COMMAND,text: '★ 创建输入框 [ID] X:[X] Y:[Y] 宽度:[W]',arguments:{ID:{type: 'string',defaultValue:'1'},X:{type: 'number',defaultValue:0},Y:{type: 'number',defaultValue:0},W:{type: 'number',defaultValue:200}}},
                    {opcode: 'delete',blockType: Scratch.BlockType.COMMAND,text: '★ 删除输入框 [ID]',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'deleteAll',blockType: Scratch.BlockType.COMMAND,text: '★ 删除全部输入框',arguments:{}},
                    {opcode: 'resetToDefault',blockType: Scratch.BlockType.COMMAND,text: '★ 让输入框 [ID] 回到默认形态',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'setPos',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 坐标 X:[X] Y:[Y]',arguments:{ID:{type: 'string',defaultValue:'1'},X:{type: 'number',defaultValue:0},Y:{type: 'number',defaultValue:0}}},
                    {opcode: 'setWidth',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 宽度 [W]',arguments:{ID:{type: 'string',defaultValue:'1'},W:{type: 'number',defaultValue:200}}},
                    {opcode: 'setSize',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 字体大小 [SIZE]',arguments:{ID:{type: 'string',defaultValue:'1'},SIZE:{type: 'number',defaultValue:16}}},
                    {opcode: 'setRot',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 旋转 [ROT]',arguments:{ID:{type: 'string',defaultValue:'1'},ROT:{type: 'number',defaultValue:90}}},
                    {opcode: 'setOpacity',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 不透明度 [OP]',arguments:{ID:{type: 'string',defaultValue:'1'},OP:{type: 'number',defaultValue:100}}},
                    {opcode: 'setLayer',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 图层 [NUM]',arguments:{ID:{type: 'string',defaultValue:'1'},NUM:{type: 'number',defaultValue:0}}},
                    {opcode: 'layerFront',blockType: Scratch.BlockType.COMMAND,text: '★ [ID] 往前一层',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'layerBack',blockType: Scratch.BlockType.COMMAND,text: '★ [ID] 往后一层',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'layerToFront',blockType: Scratch.BlockType.COMMAND,text: '★ [ID] 移到最前面',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'layerToBack',blockType: Scratch.BlockType.COMMAND,text: '★ [ID] 移到最后面',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'setTextColor',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 文字颜色 [COLOR]',arguments:{ID:{type: 'string',defaultValue:'1'},COLOR:{type: 'color',defaultValue:'#000000'}}},
                    {opcode: 'setBgColor',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 纯色背景 [BG]',arguments:{ID:{type: 'string',defaultValue:'1'},BG:{type: 'color',defaultValue:'#FFFFFF'}}},
                    {opcode: 'setGradColor',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 渐变 [S] → [E]',arguments:{ID:{type: 'string',defaultValue:'1'},S:{type: 'color',defaultValue:'#ffffff'},E:{type: 'color',defaultValue:'#cccccc'}}},
                    {opcode: 'setBgType',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 背景样式 [OPT]',arguments:{ID:{type: 'string',defaultValue:'1'},OPT:{type: 'string',defaultValue:'纯色',menu:'bgTypeMenu'}}},
                    {opcode: 'setShowBg',blockType: Scratch.BlockType.COMMAND,text: '★ [ID] 背景 [OPT]',arguments:{ID:{type: 'string',defaultValue:'1'},OPT:{type: 'string',defaultValue:'显示',menu:'showHide'}}},
                    {opcode: 'setRadius',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 圆角 [R]',arguments:{ID:{type: 'string',defaultValue:'1'},R:{type: 'number',defaultValue:4}}},
                    {opcode: 'setBorder',blockType: Scratch.BlockType.COMMAND,text: '★ 设置 [ID] 边框颜色 [C] 宽度 [W]',arguments:{ID:{type: 'string',defaultValue:'1'},C:{type: 'color',defaultValue:'#000000'},W:{type: 'number',defaultValue:1}}},
                    {opcode: 'setFixedHeight',blockType: Scratch.BlockType.COMMAND,text: '★ 设置输入框 [ID] 固定高度 [H]',arguments:{ID:{type: 'string',defaultValue:'1'},H:{type: 'number',defaultValue:24}}},
                    {opcode: 'unsetFixedHeight',blockType: Scratch.BlockType.COMMAND,text: '★ 取消输入框 [ID] 固定高度',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'show',blockType: Scratch.BlockType.COMMAND,text: '★ 显示输入框 [ID]',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'hide',blockType: Scratch.BlockType.COMMAND,text: '★ 隐藏输入框 [ID]',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'clear',blockType: Scratch.BlockType.COMMAND,text: '★ 清空输入框 [ID]',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'focus',blockType: Scratch.BlockType.COMMAND,text: '★ 激活 [ID] 聚焦',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'blur',blockType: Scratch.BlockType.COMMAND,text: '★ 取消 [ID] 聚焦',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'getText',blockType: Scratch.BlockType.REPORTER,text: '★ [ID] 输入内容',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'getX',blockType: Scratch.BlockType.REPORTER,text: '★ [ID] X坐标',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'getY',blockType: Scratch.BlockType.REPORTER,text: '★ [ID] Y坐标',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'getLayer',blockType: Scratch.BlockType.REPORTER,text: '★ [ID] 当前图层',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'getOpacity',blockType: Scratch.BlockType.REPORTER,text: '★ [ID] 不透明度',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'isFixedHeight',blockType: Scratch.BlockType.BOOLEAN,text: '★ 输入框 [ID] 是否固定高度？',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'exists',blockType: Scratch.BlockType.BOOLEAN,text: '★ 输入框 [ID] 存在？',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'isFocused',blockType: Scratch.BlockType.BOOLEAN,text: '★ [ID] 已聚焦？',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                    {opcode: 'isKeyPressedInInput',blockType: Scratch.BlockType.BOOLEAN,text: '★ 输入框 [ID] 输入时按下 [KEY] 键？',arguments:{ID:{type: 'string',defaultValue:'1'},KEY:{type: 'string',defaultValue:'enter'}}},
                    {opcode: 'inputLineBreak',blockType: Scratch.BlockType.COMMAND,text: '★ 让输入框 [ID] 换行',arguments:{ID:{type: 'string',defaultValue:'1'}}},
                ],
                menus: {
                    showHide:{items:['显示','隐藏']},
                    bgTypeMenu:{items:['纯色','渐变横向','渐变纵向']}
                }
            };
        },

        create(args) {
            const id = args.ID;
            if (inputs[id]) return;
            const container = document.createElement('div');
            container.className = 'customInputContainer';
            const dom = document.createElement('textarea');
            dom.className = 'customInput';
            dom.rows = 1;
            dom.addEventListener('input', handleInputChange);
            
            const focusHandler = function() {
                keyState.focusedInputId = id;
            };
            const blurHandler = function() {
                if (keyState.focusedInputId === id) {
                    keyState.focusedInputId = '';
                }
            };
            dom.addEventListener('focus', focusHandler);
            dom.addEventListener('blur', blurHandler);
            
            container.appendChild(dom);

            inputs[id] = {
                container, dom, focusHandler, blurHandler,
                x: args.X, y: args.Y, w: args.W, size:16,
                color:'#000', bg:'#fff', bgStart:'#fff', bgEnd:'#ccc',
                showBg:true, bgType:'纯色', radius:4, opacity:1, rot:90,
                borderColor:'#000', borderWidth:1, layer:0,
                isFixedHeight: false,
                fixedHeight: 24,
                show: true
            };

            document.body.appendChild(container);
            
            forceUpdate();
            setTimeout(forceUpdate, 0);
        },
        delete(args) {
            if(inputs[args.ID]){
                const d = inputs[args.ID];
                d.dom.removeEventListener('input', handleInputChange);
                d.dom.removeEventListener('focus', d.focusHandler);
                d.dom.removeEventListener('blur', d.blurHandler);
                d.container.remove();
                if (keyState.focusedInputId === args.ID) {
                    keyState.focusedInputId = '';
                }
                delete inputs[args.ID];
            }
        },
        deleteAll() {
            for(let k in inputs){
                const d = inputs[k];
                d.dom.removeEventListener('input', handleInputChange);
                d.dom.removeEventListener('focus', d.focusHandler);
                d.dom.removeEventListener('blur', d.blurHandler);
                d.container.remove();
            }
            keyState.focusedInputId = '';
            inputs = {};
        },

        resetToDefault(args) {
            const d = inputs[args.ID];
            if (!d) return;
            
            d.size = 16;
            d.color = '#000';
            d.bg = '#fff';
            d.bgStart = '#fff';
            d.bgEnd = '#ccc';
            d.showBg = true;
            d.bgType = '纯色';
            d.radius = 4;
            d.opacity = 1;
            d.rot = 90;
            d.borderColor = '#000';
            d.borderWidth = 1;
            d.layer = 0;
            d.isFixedHeight = false;
            d.fixedHeight = 24;
            d.show = true;
            
            d.dom.value = '';
            d.dom.blur();
            
            forceUpdate();
        },

        setPos(args){const d=inputs[args.ID];if(d){d.x=args.X;d.y=args.Y;forceUpdate();}},
        setWidth(args){const d=inputs[args.ID];if(d){d.w=args.W;forceUpdate();}},
        setSize(args){const d=inputs[args.ID];if(d){d.size=args.SIZE;forceUpdate();}},
        setRot(args){const d=inputs[args.ID];if(d){d.rot=args.ROT;forceUpdate();}},
        setOpacity(args){const d=inputs[args.ID];if(d){d.opacity=args.OP/100;forceUpdate();}},
        setLayer(args){const d=inputs[args.ID];if(d){d.layer=args.NUM;forceUpdate();}},

        layerFront(args){
            const d=inputs[args.ID];if(!d)return;
            const arr=Object.values(inputs).map(v=>v.layer).filter(l=>l>d.layer);
            if(arr.length===0)return;
            d.layer=Math.min(...arr)+1;
            forceUpdate();
        },
        layerBack(args){
            const d=inputs[args.ID];if(!d)return;
            const arr=Object.values(inputs).map(v=>v.layer).filter(l=>l<d.layer);
            if(arr.length===0)return;
            d.layer=Math.max(...arr)-1;
            forceUpdate();
        },
        layerToFront(args){
            const d=inputs[args.ID];if(!d)return;
            const maxL=Math.max(...Object.values(inputs).map(v=>v.layer));
            d.layer=maxL+1;
            forceUpdate();
        },
        layerToBack(args){
            const d=inputs[args.ID];if(!d)return;
            const minL=Math.min(...Object.values(inputs).map(v=>v.layer));
            d.layer=minL-1;
            forceUpdate();
        },

        setTextColor(args){const d=inputs[args.ID];if(d){d.color=args.COLOR;forceUpdate();}},
        setBgColor(args){const d=inputs[args.ID];if(d){
            d.bg=args.BG;
            d.bgType='纯色';
            d.showBg=true;
            forceUpdate();
        }},
        setGradColor(args){const d=inputs[args.ID];if(d){
            d.bgStart=args.S;
            d.bgEnd=args.E;
            d.showBg=true;
            d.bgType='渐变横向';
            forceUpdate();
        }},
        setBgType(args){const d=inputs[args.ID];if(d){d.bgType=args.OPT;forceUpdate();}},
        setShowBg(args){const d=inputs[args.ID];if(d){d.showBg=(args.OPT==='显示');forceUpdate();}},
        setRadius(args){const d=inputs[args.ID];if(d){d.radius=args.R;forceUpdate();}},
        setBorder(args){const d=inputs[args.ID];if(d){d.borderColor=args.C;d.borderWidth=args.W;forceUpdate();}},

        setFixedHeight(args) {
            const d = inputs[args.ID];
            if (d) {
                d.isFixedHeight = true;
                d.fixedHeight = args.H;
                forceUpdate();
            }
        },

        unsetFixedHeight(args) {
            const d = inputs[args.ID];
            if (d) {
                d.isFixedHeight = false;
                forceUpdate();
            }
        },

        show(args){const d=inputs[args.ID];if(d){
            d.show = true;
            forceUpdate();
        }},
        hide(args){const d=inputs[args.ID];if(d){
            d.show = false;
            forceUpdate();
        }},
        clear(args){const d=inputs[args.ID];if(d){d.dom.value='';forceUpdate();}},
        focus(args){const d=inputs[args.ID];if(d)d.dom.focus();},
        blur(args){const d=inputs[args.ID];if(d)d.dom.blur();},
        getText(args){return inputs[args.ID]?inputs[args.ID].dom.value:'';},
        getX(args){return inputs[args.ID]?inputs[args.ID].x:0;},
        getY(args){return inputs[args.ID]?inputs[args.ID].y:0;},
        getLayer(args){return inputs[args.ID]?inputs[args.ID].layer:0;},
        getOpacity(args){return inputs[args.ID]?Math.round(inputs[args.ID].opacity*100):100;},

        isFixedHeight(args) {
            const d = inputs[args.ID];
            return d ? d.isFixedHeight : false;
        },

        exists(args){return !!inputs[args.ID];},
        isFocused(args){return inputs[args.ID]?(document.activeElement===inputs[args.ID].dom):false;},

        isKeyPressedInInput(args) {
            const id = args.ID;
            const key = args.KEY.toLowerCase().trim();
            const now = Date.now();
            
            return !!inputs[id] && 
                   keyState.focusedInputId === id && 
                   keyState.pressedKeyTime[key] && 
                   (now - keyState.pressedKeyTime[key] < KEY_PRESS_DURATION);
        },

        inputLineBreak(args) {
            const d = inputs[args.ID];
            if (!d) return;
            const el = d.dom;
            const start = el.selectionStart;
            const end = el.selectionEnd;
            el.value = el.value.substring(0, start) + '\n' + el.value.substring(end);
            el.selectionStart = el.selectionEnd = start + 1;
            forceUpdate();
        }
    };
    Scratch.extensions.register(extension);
})(Scratch);
