# 使用官方 Node 映像檔
FROM node:20

# 設定工作目錄
WORKDIR /app

# 安裝 pnpm
RUN npm install -g pnpm

# 複製 package.json 和 pnpm-lock.yaml
COPY package.json ./
COPY pnpm-lock.yaml ./

# 安裝依賴
RUN pnpm install

# 複製所有程式碼
COPY . .

# 建置專案
RUN pnpm build

# 暴露端口
EXPOSE 3000

# 啟動 Vike 預覽伺服器
CMD ["pnpm", "preview"]
