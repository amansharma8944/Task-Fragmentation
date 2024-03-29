// TransactionList.tsx
import React from 'react';

interface Transaction {
  // Adjust based on your transaction data structure
  timeStamp: number;
  amount: string; // Example field
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions,priceUSD }) => {
  return (<>
    <div className="header">
          <p className="header_label">Burn Transactions</p>
        </div>
        <BurnTxTable
          data={transactions}
          priceUSD={priceUSD}
          />
          </>
     
  );
};

export default TransactionList;
