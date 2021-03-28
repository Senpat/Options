import {TradingViewEmbed, widgetType} from "react-tradingview-embed"

const Widget = ({symbol,exchange}) => {
    console.log(symbol)

    return (
        <div class="widget">
            <TradingViewEmbed 
                widgetType={widgetType.SYMBOL_OVERVIEW}
                widgetConfig={{
                    "colorTheme": "dark",
                    "symbols": [[
                        symbol,
                        symbol
                    ]]
                    
                }}
            />

        </div>
    )

}

export default Widget