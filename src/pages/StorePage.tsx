const StoreItem = (props: {
  imgSrc: any;
  title: any;
  subtitle: any;
  price: any;
  isNew: any;
  isSoldOut: any;
}) => {
  const { imgSrc, title, subtitle, price, isNew, isSoldOut } = props;

  return (
    <div className="relative p-4 bg-white border rounded-lg shadow-md hover:bg-gray">
      {isNew && (
        <div className="absolute top-0 left-0 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-br-lg">
          NEW
        </div>
      )}
      {isSoldOut && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <span className="text-xl font-bold text-white">SOLD OUT</span>
        </div>
      )}
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      <p className="mt-4 text-xl font-bold text-purple-700">{price} 원</p>
    </div>
  );
};

const StorePage = () => {
  return (
    <div className="p-8 bg-gray-100 hover:">
      <h1 className="text-3xl font-bold mb-8">스토어</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StoreItem
          imgSrc="https://img.megabox.co.kr/SharedImg/store/2024/03/29/vMsr1afs6h28dyrsnpTb5UHoL05hxISS_280.png"
          title="황태스낵"
          subtitle="황태스낵 1"
          price="5,900"
          isNew={true}
          isSoldOut={false}
        />
        <StoreItem
          imgSrc="https://img.megabox.co.kr/SharedImg/store/2024/03/29/vMsr1afs6h28dyrsnpTb5UHoL05hxISS_280.png"
          title="(특가) 황태스낵"
          subtitle="황태스낵 1"
          price="2,900"
          isNew={false}
          isSoldOut={true}
        />
        <StoreItem
          imgSrc="	https://img.megabox.co.kr/SharedImg/store/2023/12/21/xgNuyruo8l24C6EspYo67ZLM48ybqFZN_280.png"
          title="오징어튀김 세트"
          subtitle="오징어튀김1 + 탄산음료(L) 1"
          price="8,900"
          isNew={true}
          isSoldOut={false}
        />
        <StoreItem
          imgSrc="	https://img.megabox.co.kr/SharedImg/store/2023/12/21/K99yJLfXxchZxW3DnC67i4Aj2gVlkdOG_280.png"
          title="오징어튀김"
          subtitle="오징어튀김1"
          price="6,900"
          isNew={false}
          isSoldOut={false}
        />
        <StoreItem
          imgSrc="	https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_720.png"
          title="러브콤보"
          subtitle="팝콘(L) 1 + 탄산음료(R) 2"
          price="9,900"
          isNew={false}
          isSoldOut={false}
        />
        <StoreItem
          imgSrc="	https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_720.png"
          title="더블콤보"
          subtitle="팝콘(R) 2 + 탄산음료(R) 2"
          price="12,900"
          isNew={false}
          isSoldOut={false}
        />
      </div>
    </div>
  );
};

export default StorePage;
