type BookItem = {
  id: number;
  title: string;
  author: string;
  description: string;
  url: string;
};

const BookList = () => {
  const books: BookItem[] = [
    {
      id: 1,
      title: "デザインの骨格",
      author: "山中俊治",
      description:
        "デザイナーとエンジニア、両方の視点を持ち、腕時計や鉄道車両などの製品からロボットのデザインまで手掛けるなど、幅広い分野で活躍するプロダクトデザイナーの山中俊治氏。山中氏がSuica改札機の読み取り角度を13.5度とデザインした理由は一体何なのか？また、走行用義足のプロジェクトに携わる中で感じる医療現場とデザインの新たな可能性とは？人々が見過ごしてしまうことに疑問を投げかけ、常に人とものの新しい関係を探求する山中氏の発想の原点を、自身が2009年から書き続けているブログ「デザインの骨格」の中から探りました。本書を読めば、デザインが特別な技術や知識でないことが理解でき、普段の生活や自分の行動をデザインという視点で観察する習慣が身につきます。デザイナーのみならず、商品企画や商品開発に携わる全てのかたにおすすめの1冊です。",
      url: "https://images-na.ssl-images-amazon.com/images/I/41g1yIh9-gL._SX349_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "資本主義リアリズム",
      author: "マーク・フィッシャー",
      description:
        "「はっきり言わせてもらおう。たまらなく読みやすいこのフィッシャーの著書ほど、われわれの苦境を的確に捉えた分析はない」スラヴォイ・ジジェク ",
      url: "https://images-fe.ssl-images-amazon.com/images/I/51zRmus4qDL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    },
    {
      id: 3,
      title: "革命前夜",
      author: "須賀 しのぶ",
      description:
        "バブル期の日本を離れ、ピアノに打ち込むために東ドイツのドレスデンに留学した眞山柊史。留学先の音楽大学には、個性豊かな才能たちが溢れていた。中でも学内の誰もが認める二人の天才が──。正確な解釈でどんな難曲でもやすやすと手なづける、イェンツ・シュトライヒ。奔放な演奏で、圧倒的な個性を見せつけるヴェンツェル・ラカトシュ。 ヴェンツェルに見込まれ、学内の演奏会で彼の伴奏をすることになった眞山は、気まぐれで激しい気性をもつ彼に引きずり回されながらも、彼の音に魅せられていく。その一方で、自分の音を求めてあがく眞山は、ある日、教会で啓示のようなバッハに出会う。演奏者は、美貌のオルガン奏者・クリスタ。彼女は、国家保安省(シュタージ)の監視対象者だった……。冷戦下の東ドイツで、眞山は音楽に真摯に向き合いながらも、クリスタの存在を通じて、革命に巻き込まれていく。ベルリンの壁崩壊直前の冷戦下の東ドイツを舞台に一人の音楽家の成長を描いた歴史エンターテイメント。",
      url: "https://m.media-amazon.com/images/P/B07B4SXMSW.01._SCLZZZZZZZ_SX500_.jpg",
    },
  ];
  return (
    <div>
      <div className="title-main">
        <h1>書籍一覧</h1>
      </div>
      <div>
        <div className="book-list">
          {books.map((book: BookItem) => {
            return (
              <div className="book-item" key={book.id}>
                <img src={book.url} alt="表紙" />
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookList;
