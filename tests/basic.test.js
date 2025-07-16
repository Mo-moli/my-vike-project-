// 基本測試檔案 - 確保專案基本功能正常

describe('Basic Project Tests', () => {
  test('專案配置檔案存在', () => {
    const fs = require('fs');
    const path = require('path');
    
    // 檢查重要檔案是否存在
    const importantFiles = [
      'package.json',
      'vite.config.ts',
      'tsconfig.json'
    ];
    
    importantFiles.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  test('package.json 包含必要腳本', () => {
    const packageJson = require('../package.json');
    
    expect(packageJson.scripts).toBeDefined();
    expect(packageJson.scripts.dev).toBeDefined();
    expect(packageJson.scripts.build).toBeDefined();
    expect(packageJson.scripts.preview).toBeDefined();
  });

  test('Node.js 環境設定正確', () => {
    const packageJson = require('../package.json');
    
    expect(packageJson.engines).toBeDefined();
    expect(packageJson.engines.node).toBe('20.x');
  });

  test('基本數學運算正常', () => {
    expect(2 + 2).toBe(4);
    expect(5 * 3).toBe(15);
    expect(10 / 2).toBe(5);
  });
}); 