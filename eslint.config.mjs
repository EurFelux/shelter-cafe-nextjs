import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
    // 添加引号规则配置
  {
    rules: {
      // 基础引号规则（处理 JS 文件）
      "quotes": ["error", "double", { 
        "avoidEscape": true,  // 允许在需要时使用转义字符
        "allowTemplateLiterals": true  // 允许模板字符串
      }],
      
      // TypeScript 特定引号规则
      "@typescript-eslint/quotes": ["error", "double", {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }]
    }
  }
];

export default eslintConfig;
