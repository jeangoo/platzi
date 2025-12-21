import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 8080;

  console.log(command, mode);
  const env = loadEnv(mode, process.cwd());
  console.log(env);

  if (mode == "development") {
    console.log("development mode on");
    return {
      server: {
        port,
      },
    };
  } else {
    console.log("production mode on");
    return {
      build: {
        lib: {
          entry: resolve(__dirname, "lib", "main.js"),
          name: "demo",
          fileName: (format) => `demo.${format}.js`,
        },
        // rollupOptions: {
        //   input: {
        //     main: resolve(__dirname,  'index.html'),
        //     error: resolve(__dirname, 'error', 'error.html')
        //   },
        // },
      },
    };
  }
});
