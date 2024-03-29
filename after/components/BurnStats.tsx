// Assuming the original code uses a utility function for formatting,
// or if it's part of a library (like `Intl.NumberFormat` which is built-in)

const formatNumber = (number: number) => {
    return Intl.NumberFormat('en-US').format(number);
  };
  
  interface BurnStatsContainerProps {
    statsSupplies: {
      circulatingSupply: number;
      totalSupply: number;
      circulatingPercent: number;
    };
    allSupplies: any[]; // Adjust based on actual type if available
    walletChain: {
      id?: string;
      name?: string;
      nativeCurrency?: { symbol: string };
      blockExplorers?: { default: { url: string } };
    };
    openChainModal: () => void;
  }
  
  export const BurnStatsContainer: React.FC<BurnStatsContainerProps> = ({
    statsSupplies,
    allSupplies,
    walletChain,
    openChainModal,
  }) => {
    // Function to handle opening the chain selection modal
    const handleChainSwitch = () => {
      openChainModal();
    };
  
    return (
      <div>
        <h2>Token Supply Details</h2>
        <button onClick={handleChainSwitch}>Switch Chain: {walletChain?.name || 'Select Chain'}</button>
        <div>
          <p>Total Supply: {formatNumber(statsSupplies.totalSupply)} {walletChain.nativeCurrency?.symbol}</p>
          <p>Circulating: {formatNumber(statsSupplies.circulatingSupply)} {walletChain.nativeCurrency?.symbol}</p>
          <p>Burnt: {formatNumber(statsSupplies.totalSupply - statsSupplies.circulatingSupply)} {walletChain.nativeCurrency?.symbol}</p>
        </div>
        {allSupplies.length > 0 && (
          allSupplies.map((supply, index) => (
            <div key={index}>
              <h3>Additional Chain Supplies</h3>
              <p>Chain: {supply.chainId}</p>
              <p>Total Supply: {formatNumber(supply.totalSupply)}</p>
              <p>Circulating: {formatNumber(supply.circulatingSupply)}</p>
              <p>Burnt: {formatNumber(supply.totalSupply - supply.circulatingSupply)}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  