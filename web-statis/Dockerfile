# OS
FROM nginx:alpine

# PORT
EXPOSE 80

# Hapus file bawaan nginx dulu agar bersih (opsional tapi bagus)
RUN rm -rf /usr/share/nginx/html/*

# 🔥 PERBAIKAN: Salin SEMUA file (termasuk index.html dan pp.jpg) ke dalam Nginx
COPY . /usr/share/nginx/html/