function fromEnv(varName: string, fallback: string): string {
  return process.env[varName] ?? fallback;
}

const appConfigProps = ['port'] as const;

export const appConfig: {
  [key in (typeof appConfigProps)[number]]: string;
} = {
  port: fromEnv('PORT', '3000')
};
