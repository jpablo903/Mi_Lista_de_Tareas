# Etapa de desarrollo
FROM node:20-alpine

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración del proyecto
COPY package.json ./

# Instalar dependencias
RUN pnpm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de desarrollo
EXPOSE 4200

# Comando por defecto: ejecutar servidor de desarrollo
CMD ["pnpm", "start"]
