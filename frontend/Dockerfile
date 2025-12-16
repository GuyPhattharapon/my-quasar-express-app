# Production Stage (Nginx serve static files)
FROM nginx:1.27-alpine

# Copy local build artifacts
COPY dist/spa /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
