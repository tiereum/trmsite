import "./Miner.css"
import MinerIcon from "./MinerIcon"

const Miner = () => {

    return (
        <div id="miner">
            <div id="top">
                <text>An authentic layer 1 protocol.</text>
            </div>
            <div id="body">
            <MinerIcon/>
            <div id="terminal">

                <div id="header">
                <text>Bash</text>
                </div>
                <div id="screen">
                    <text>FAST and FEELEST transactions, along with a stable currency - with STBLCASH, you can say goodbye to exorbitant gas fees, fraudulent NFTs, and frustratingly long wait times for UTXO confirmations—without needing to explain confusing fees to your grandfather. And we achieve all this while remaining true to the principles of SN.</text>
                </div>
                <div id="footer">
                    <div id="prompt">
                    <text>$</text>
                    </div>
                    <div id="input" >
                    <form>
                    <input
                        type="text"
                        placeholder="terium wallet --create --name mywallet"
                        onSubmit={(e) => {e.preventDefault()}}
                        onKeyDown={(e) => {e.preventDefault()}}
                    />
                    </form>
                    </div>
                </div>

            </div>
            </div>
            <div id="footer">

            </div>
        </div>
    )
}

export default Miner