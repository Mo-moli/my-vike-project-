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

# 啟動伺服器（根據你的專案啟動指令調整）
COPY start.sh .
RUN chmod +x start.sh
CMD ["./start.sh"]
