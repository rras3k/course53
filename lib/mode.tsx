export const isProduction = process.env.NEXT_PUBLIC_MODE === "production";
export const isDev = process.env.NEXT_PUBLIC_MODE === "development";
export const isTest = process.env.NEXT_PUBLIC_MODE === "testing"