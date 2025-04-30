import React from "react";
import {
  Printer,
  MapPin,
  Users,
  Calendar,
  Clock,
  CreditCard,
} from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: Printer,
      title: "印刷設備",
      description:
        "高性能なプリンター・スキャナーを完備し、ビジネス文書作成をサポートします。",
      delay: 100,
    },
    {
      icon: MapPin,
      title: "住所登録サービス",
      description: "事業所として公式に使える住所登録サービスを提供しています。",
      delay: 200,
    },
    {
      icon: Users,
      title: "コミュニティイベント",
      description:
        "起業家同士の交流を深める定期的なイベントやワークショップを開催しています。",
      delay: 300,
    },
    {
      icon: Calendar,
      title: "多目的スペース",
      description:
        "ビジネス会議からヨガクラス、マルシェまで様々な用途に適した設備と空間を予約制でご利用いただけます。",
      delay: 400,
    },
    {
      icon: Clock,
      title: "柔軟な利用時間",
      description:
        "平日9時〜20時、土曜10時〜17時の営業時間内でご利用いただけます。",
      delay: 500,
    },
    {
      icon: CreditCard,
      title: "格安料金プラン",
      description:
        "起業家や中小企業にも負担の少ない価格設定で質の高いワークスペースをご提供します。",
      delay: 600,
    },
  ];

  return (
    <div>
      <section className="w-full py-12 md:py-24 bg-[#2C2C2C]">
        <div className="container px-4 md:px-6 mx-auto">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            data-aos="fade-up"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                多様なビジネスを支えるワークスペース
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
                フリーランスから中小企業まで、様々な事業者が利用する充実の設備とサービス。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-6 bg-[#1F1F1F] rounded-lg"
                data-aos="fade-up"
                data-aos-delay={feature.delay.toString()}
              >
                <div className="p-2 bg-[#3A3A3A] rounded-full">
                  <feature.icon className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
