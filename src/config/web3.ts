import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, polygon } from 'wagmi/chains';

export const chains = [mainnet, sepolia, polygon] as const;

export const wagmiConfig = getDefaultConfig({
  appName: 'Web3 Platform',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? '',
  chains,
  ssr: false,
});
