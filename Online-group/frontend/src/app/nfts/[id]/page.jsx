import Heading from "@/app/components/Heading";

// RULE:
// We create a file called [param-name].jsx inside a folder [param-name]
// Afterwards, we can access the param-name by using the params object
// EX:
// https:.../nfts/1
// https:.../nfts/2 ...
// ----------------------------------------------------------------------
// RU:
// Правила:
// 1. Мы создаем файл внутри папки [param-name]
// 2. После этого мы можем получить доступ к param-name, используя объект params
// EX:
// https:.../nfts/1
// https:.../nfts/2 ...


function NFT_details({ params }) {
    return (
        <div className="nft-details-page page-wrapper">
            <Heading size={2}>NFT Details {params.id}</Heading>
        </div>
    )
}

export default NFT_details