//扩展名：“CodingHou 社区”
//ID：codinghouShequ
//版本：0.1
//加载该扩展时，请勾选“在非沙盒环境下运行”，否则无法正常使用
//目前只能在编程侯老师网站上面才能正常使用
//注：此扩展由非官方制作
/**
 * Copyright (c) 2026 侯网的编程猫
 * All Rights Reserved.
 *
 * 本代码公开可查看，允许在 TurboWarp 中正常加载和使用。
 * 未经作者书面许可，禁止修改、二次发布、再分发或用于商业发布。
 * 如需授权，请联系作者。
 */
(function(Scratch) {
  'use strict';

  const menuIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAK+UExURQAAAHNZ+3Va+3VZ+3Va+3RZ+3BR/fzVZfzLPvzJN/zKOvzNS/3prXVa/HVa+3RZ+/zWZvzJNfzNRnRZ+3Va+/zLP/vSWHVa+3RZ+/zMP3Va+3RZ+vzHMPzLQHVZ+3RZ+vzKOvzNRHNZ+nVa+nRZ+3VY+vvOS/vHL/zJNf3WbXdZ/3VZ+nVa+3RZ+nRa/P/vw/zNR/zHMfzHL/vJNfzRUHVa+3RZ+nVZ+3Va+nJZ+f3RVPzMQ/zNQ/zNRPvXanRZ+3RZ+nVZ+3Ra+3Ra+XVa+3Ra+nVa+3RZ+nha/3Ra+nVZ+3RZ+nVa+3Ra+nRZ+nVZ+3Va+3Ra+nRZ+nVa+3Za/HRa+nRa+nRa+3VZ+3RZ+3JZ+nRZ+nVa+nRa+nRZ+3Nb+nVZ+3RZ+nRa+3RZ+3Va+3RZ+nVa+3VZ+3VZ+3RZ+nRZ+3RZ+nVa+3RZ+nRZ+3Ra+nRZ+nRa+nRa+nRZ+nVZ+nRZ+3Ra+nRZ+nRc+nNa+nRZ+XVZ+3Va+3Va+nNa+XlZ/nRa+3Ra+nRa+3RZ+3VZ/HRa+XVZ+3Ra+nVZ+nZX+nRa+nRa+nVa+3RZ+3RY+nRV9HRZ+3Va+3RZ+3Ra+3NZ+fJtce9eYvBeYu9fY/J+gnVV9HRZ+nRZ+nVZ+//S0vBiZe5OUu5NUe5SVvFqbXRZ+nVZ+3RZ+3Va+u9laO5NUO5SVvOChXRZ++5WWu9fYnVZ+3RZ+3Va+u5OUu9bX3Ra+3Va+3VZ++5UV+9aXnVa+3Ra++9aXvBvc3Ra+3RX+XRa+3VZ+vN9f+5SVvBgZHRa+3Ra+nVa+3Va+3Ra+3RZ+3VZ+vF9f+9aXe9UV+5WWvBjZ/i5unVa+/zHMPzHLnRa+/zZdf3suvzMQf3qtP79+PzVY/zLPvzUYHVZ++5MUO9ZXfF3evi+wP75+fJ5fPOIi/nDxO9bX+5OUu5NUf///42FeckAAADRdFJOUwAgp/XfcgIgp/XfcgIg5Zsg5ZupQKlA9Y+P/aH9odly2XJo/ecWaP3nFgSP899ABI/z/d9AOn6TaBg6fpNoGBhCWjgMDCouIAQWUNf7vSg+w/XnlxIov9c68xA077UGErVut07xq/mV76n9ne+xastkNvHRDlD71Q40StH3tyQCauX9wyhIFDwwCiBWaEAOBFSjuZM4On6TaBgEo/NoBI/z/d9AbP33Lmj95xbV2XLT+bH9offhm/WPi0KpQIkOzZUg5ZvLg9ntyWACIKf133ICm6d6gwAAAAFiS0dE6VHTR5QAAAAHdElNRQfqCAEBBAiYspnhAAAAAW9yTlQBz6J3mgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wOC0wMVQwMTowNDowOCswMDowMD42h/4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDgtMDFUMDE6MDQ6MDgrMDA6MDBPaz9CAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA4LTAxVDAxOjA0OjA4KzAwOjAwGH4enQAAAFplWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAABH1L3NAAAAmBJREFUOMut0gVTVUEcBfBDKiqggoIPBSUMyqRMwkTseGCCD1CfggqYlElYpEWYhK2ooKI+MUjzstiydnwMd/fuDH4A/jN35nfPO3Pv7r4LGBmbKKZm5uDTpatFa7fuPTjNzUwVE2MjwNJK4WPNw569CJ/e3NYitrKEjYDSZsvCPuzXVnb1BWzb1NwGdioUe1awIOTN23eE9APsZWwHjZQDK/Qn5P2Hj4QMABxkrIGjlBMrDCTk02f2ikGAk4wd4ewi4OrGCoOHiEUOHQa4uYrYxRnuHp7sQV7efOXDR4wkZNToMdzeXuzlnh7ujD6+fv4BUGfsuPETJqoM8Pfz9UHnzKTAoOAQ6clTpk6brjIkOChwBkfozHYlbNZsEc6ZO08zf8FCzkWLw5R2bSgQHiH2o13CwqXLhJevAFZqBSPCESlPJIoVVknrgCjJSERLxbBCrPRqIEYyGmuk1rKCXnpdR2E94qTiWWGD9EYgXjIOmxIEEpNYYfMW4a3bgKREwYTtwI5kvZKSmsa3lr5zl6Ls3rOXOy01RdEn7+PMyNRlZcuD2n/g4KHDKrOzdJkZnfNX5OTm5RcUypsjR48dP6GysCA/LzcHKCrmx1NSyrOTp05TeubsOe7SEhbHFhehrFzsp6KShecvUD4XLwGVFSIuL8Pl/z77K5R++coaVzs++2u4LlXFCjco/fb9B6U3gSoZ30K1VA0r3Kb056/flN4BamRcjbtStaxwjz3+D7vuA7UyfgDDQ4E6vvJHj8Uin3DXifipATDUNzQ2NbeIvT97/uLvy1evOVuamxob6g34B5lhqNf78eKvAAAAAElFTkSuQmCC';
  const blockIconURI = 'data:image/png;base64,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';

  class CodingHouExtension {
    getInfo() {
      return {
        id: 'codingHouShequ',
        name: 'CodingHou 社区',
        color1: "#585858",
        color2: "#000000",
        color3: "#000000",
        menuIconURI,
        blockIconURI,
        menus: {
          userFields: {
            acceptReporters: false,
            items: [
              { text: '昵称', value: 'nickname' },
              { text: 'ID', value: 'id' }
            ]
          }, 
          workFields: {
            acceptReporters: false,
            items: [
              { text: '作品名称', value: 'name' },
              { text: '作品介绍', value: 'intro' },
              { text: '作者昵称', value: 'nickname' },
              { text: '作者ID', value: 'id' },
              { text: '浏览数', value: 'viewCount' }, 
              { text: '点赞数', value: 'favorsCount' }, 
              { text: '最后保存时间', value: 'modifyTime' }, 
              { text: '最后发布时间', value: 'publishTime' }, 
              { text: '创建时间', value: 'createTime' }, 
              { text: '封面链接', value: 'shotCut' }
            ]
          }
        },
        blocks: [
          {
            opcode: 'getUserField',
            blockType: Scratch.BlockType.REPORTER,
            text: '获取用户的 [FIELD]',
            arguments: {
              FIELD: {
                type: Scratch.ArgumentType.STRING,
                menu: 'userFields'
              }
            },
            disableMonitor: true
          }, 
          {
            opcode: 'getWorkField',
            blockType: Scratch.BlockType.REPORTER,
            text: '获取作品编号 [ID] 的 [FIELD]',
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '424674'
              },
              FIELD: {
                type: Scratch.ArgumentType.STRING,
                menu: 'workFields'
              }
            },
            disableMonitor: true
          }
        ]
      };
    }

    async getUserField(args) {
      const field = args.FIELD;
      const url = 'https://codinghou.cn/api/auth/user';
      
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          return '获取失败：网络错误或用户未登录';
        }

        const data = await response.json();
        
        if (data && data.hasOwnProperty(field)) {
          return data[field];
        } else {
          return '获取失败：网络错误或用户未登录';
        }
      } catch (error) {
        return '获取失败：网络错误或用户未登录';
      }
    }
    
    async getWorkField(args) {
      const id = String(args.ID).trim();
      const fieldKey = args.FIELD; 

      const url = 'https://codinghou.cn/work/workdetail/' + id + '/_payload.json';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          return '获取失败：作品不存在或网络错误';
        }

        const data = await response.json();

        const mapping = data[3];

        if (fieldKey === 'nickname'||fieldKey === 'id') {
          const appuserIndex = mapping['appuser'];
          const appuser = data[appuserIndex];
          if (!appuser || !appuser.hasOwnProperty(fieldKey))          {
            return '获取失败：字段不存在';
          }
          const nicknameIndex = appuser[fieldKey];
          if (nicknameIndex >= data.length) {
            return '获取失败：数据格式异常';
          }
          return data[nicknameIndex];
        }

        if (!mapping || !mapping.hasOwnProperty(fieldKey)) {
          return '获取失败：字段不存在';
        }

        const actualIndex = mapping[fieldKey];
        if (actualIndex >= data.length) {
          return '获取失败：数据格式异常';
        }

        return data[actualIndex];
      } catch (error) {
        return '获取失败：网络错误';
      }
    }
  }

  Scratch.extensions.register(new CodingHouExtension());
})(Scratch);
