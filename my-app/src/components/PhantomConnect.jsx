import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const PhantomConnect = () => {
    const { publicKey, sendTransaction } = useWallet();

    return (
        <div>
            <h1>Solana Wallet Connection</h1>
            <WalletMultiButton />
            {publicKey && <p>Your wallet is connected! Public key: {publicKey.toBase58()}</p>}
        </div>
    );
};