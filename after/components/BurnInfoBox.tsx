// BurnInfoBox.tsx
import React from 'react';

interface BurnInfoBoxProps {
  burnAmount: string;
  onChangeBurnAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  executeBurn: () => void;
  txButton: string;
  txProgress: boolean;
}

const BurnInfoBox: React.FC<BurnInfoBoxProps> = ({
  burnAmount,
  onChangeBurnAmount,
  executeBurn,
  txButton,
  txProgress,
}) => {
  return (
    <div className="info_box filled">
      <h1 className="title">App TOKEN BURN</h1>
      <div className="burn_bar">
        <div className="input_value_box">
          <p className="input_muted">Enter amount to Burn</p>
          <input
            className="input_value"
            type="text"
            value={burnAmount}
            placeholder="0.00"
            onChange={onChangeBurnAmount}
          />
        </div>
        <button onClick={executeBurn} disabled={txProgress}>
          {txProgress ? "Burning..." : txButton}
        </button>
      </div>
    </div>
  );
};

export default BurnInfoBox;
