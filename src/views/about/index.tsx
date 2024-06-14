import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-[64vh]">
      <h1 className="text-center font-bold text-xl">Đôi dòng về Ngõ</h1>
      <article className="md:w-1/2 p-4 md:border md:border-black mt-4 mb-6 mx-auto md:rounded-lg space-y-2.5">
        <p className="font-semibold">Ngõ chào bạn!</p>
        <p>
          Cảm ơn bạn đã ghé thăm website của Ngõ và cho Ngõ có cơ hội được tâm
          sự đôi chút về mình.
        </p>
        <p>
          Chúng mình tình cờ biết đến Gốm Nhật trong một lần đi lạc, thật sự là
          lúc ấy chúng mình đang lạc về cả không gian, thời gian và cả ... tâm
          trí. Hôm ấy tụi mình đi rong rủi trên các con ngõ ở Sài Gòn trong giờ
          tan tầm với ánh sáng vàng nhạt của chiều tà len lỏi qua từng góc vắng,
          tụi mình hẫng một nhịp trước cửa hàng nhỏ không có biển hiệu và thổi
          vào tai là giai điệu của bản nhạc &ldquo;xưa&rdquo; mang đậm chất hoài
          niệm ...
        </p>
        <p>
          Chào mình là một Cô lớn tuổi đeo chiếc kính gọng tròn trong suốt, tụi
          mình cũng đắn đo về việc sẽ vào cửa hàng do lúc ấy thật sự chỉ muốn
          tìm đường để về nhà, nhưng do không gian ấy và cái chào thân thiện của
          Cô đã làm tụi mình quên đi nhiệm vụ lúc này.
        </p>
        <p>
          Vào tiệm, những kệ gỗ được xếp đầy bởi những chiếc chén, ly, tô, tách
          ... được làm bằng Gốm và xuất xứ từ Nhật Bản. Cô hỏi tụi mình từ đâu
          tới, &ldquo;Tụi con ở Thủ Đức nhưng đang bị lạc Cô ạ!&rdquo; tôi đáp
          lại cô một cách nhanh nhẹn trong trạng thái không chút nghĩ suy, như
          cách những người bạn đồng trang lứa chơi thân với nhau hay buôn chuyện
          cạnh gánh hàng rong.
        </p>
        <p>
          Cô cho tụi mình sạc nhờ điện thoại cho đến khi đủ để tra cứu đường về
          nhà, trong thời gian đó, tụi mình có cơ hội được nghe Cô kể về chuyện
          Gốm và cả những lần Cô &ldquo;lạc&rdquo; giống tụi mình trong giai
          đoạn trưởng thành này. Có lẽ vì Cô đã truyền cho Ngõ một tình yêu đặc
          biệt với Gốm nên tụi mình cứ ấp ủ và nuôi lớn Ngõ Gốm như hôm nay.
        </p>

        <p>
          Tuy hiện tại,{" "}
          <Link href={"/"} className="font-bold">
            Ngõ
          </Link>{" "}
          chỉ là cửa hàng nhỏ bán gốm Nhật tọa lạc tại{" "}
          <i>4/2, đường số 25, phường Long Thạnh Mỹ, thành phố Thủ Đức</i>.
          Nhưng tụi mình tin rằng,{" "}
          <Link href={"/"} className="font-bold">
            Ngõ
          </Link>{" "}
          rồi sẽ lớn và trưởng thành qua những lần bạn ghé thăm và cho Ngõ có cơ
          hội vỗ về trạng thái tâm hồn bạn!
        </p>
        <p className="text-right italic font-semibold">Ngõ Gốm</p>
      </article>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.24688489257414!2d106.83039302973107!3d10.84423499312376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175210002803ae7%3A0x8ed795132d2e7501!2zTmfDtSBH4buRbQ!5e0!3m2!1sen!2s!4v1718030733112!5m2!1sen!2s"
        className="w-full h-[36vh] rounded-lg border-orange border mt-auto mb-12"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Index;
