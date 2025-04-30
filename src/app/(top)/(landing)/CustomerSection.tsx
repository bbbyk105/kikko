import React from "react";

const CustomerSection = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 bg-[#1F1F1F] text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            data-aos="fade-up"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                ご利用者の声
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
                プロフェッショナル、起業家、クリエイティブな人々からなる
                活気あるコミュニティにご参加ください。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div
              className="flex flex-col p-6 bg-[#2C2C2C] rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex-1">
                <p className="italic text-gray-300">
                  橘香堂は私の働き方を変えました。コミュニティと設備は比類なく、
                  ビジネスにとって価値ある人脈を構築することができました。
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#3A3A3A]"></div>
                <div className="ml-4">
                  <p className="font-medium text-white">大石 浩貴</p>
                  <p className="text-sm text-amber-400">デザイナー</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col p-6 bg-[#2C2C2C] rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex-1">
                <p className="italic text-gray-300">
                  リモートワークを行う中で、このスペースを利用させていただいています。広々とした環境と高速なWi-Fiが揃っており、仕事の効率も格段に向上しました。
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#3A3A3A]"></div>
                <div className="ml-4">
                  <p className="font-medium text-white">近藤 白虎</p>
                  <p className="text-sm text-amber-400">ソフトウェア開発者</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col p-6 bg-[#2C2C2C] rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex-1">
                <p className="italic text-gray-300">
                  スタートアップの登記登録に橘香堂を選んだことは、とても良い選択でした。住所登録にも対応しており、非常に便利です。
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#3A3A3A]"></div>
                <div className="ml-4">
                  <p className="font-medium text-white">河内 光太</p>
                  <p className="text-sm text-amber-400">スタートアップ創業者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSection;
