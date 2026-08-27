/* ============================================================
   ANEST IWATA VIETNAM — DATA GỐC
   CATEGORIES + sản phẩm nhóm Máy Nén Khí & Bơm Chân Không
   Nguồn: https://anestiwataamericas.com/ (compressors/, vacuum-pumps/)
   ============================================================ */

var CATEGORIES = [
  { key: "coating",    label: "Thiết Bị Phun Sơn",         icon: "🎨" },
  { key: "compressor", label: "Máy Nén Khí",                icon: "🌀" },
  { key: "vacuum",     label: "Bơm Chân Không",             icon: "🧲" },
  { key: "fluid",      label: "Hệ Thống Cấp Liệu Sơn",      icon: "🛢️" },
  { key: "gear",       label: "Phụ Kiện & Quà Lưu Niệm",    icon: "🧢" }
];

var PRODUCTS = [
  {
    slug: "sle",
    name: "SLE Scroll Compressor",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free", subCatLabel: "Máy nén khí không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2024/12/SLE-30_trans.jpg",
    shortDesc: "Máy nén khí trục vít xoắn ốc không dầu, vận hành êm, đạt chuẩn khí sạch Class Zero.",
    lead: "SLE là dòng máy nén khí kiểu cuộn xoắn (scroll) không dầu của Anest Iwata, dùng một hoặc nhiều đầu nén hoạt động độc lập trong cùng một tủ máy. Thiết kế xoắn ốc cố định – xoắn ốc quay lệch tâm giúp khí được nén dần trong khoang kín mà không cần dầu bôi trơn, phù hợp cho các dây chuyền phun sơn, thực phẩm, dược phẩm cần khí nén sạch tuyệt đối.",
    features: [
      ["✅", "Khí nén đạt chuẩn ISO 8573-1:2010 Class Zero — hoàn toàn không lẫn dầu"],
      ["🔇", "Tủ cách âm giảm tiếng ồn, phù hợp lắp trong xưởng có người làm việc gần"],
      ["🎛️", "Tủ điều khiển đạt chuẩn UL508A, có thể cài đặt áp suất bật/tắt tự động"],
      ["🌬️", "Lọc khí đầu vào 5 micron cỡ lớn, kéo dài tuổi thọ đầu nén"],
      ["⚙️", "Dẫn động bằng dây curoa đôi kèm quạt ly tâm làm mát"],
      ["🖥️", "Màn hình HMI cảm ứng tích hợp PLC, có cổng giao tiếp BACnet/Modbus (bản SLE 10–60)"]
    ],
    specs: {
      "Công nghệ nén": "Trục vít xoắn ốc (scroll), không dầu",
      "Tiêu chuẩn khí nén": "ISO 8573-1:2010 Class 0 (Oil-Free)",
      "Tủ điều khiển": "Đạt chuẩn UL508A, tích hợp PLC",
      "Lọc khí đầu vào": "5 micron",
      "Dẫn động": "Dây curoa đôi, làm mát bằng quạt ly tâm",
      "Kết cấu": "Tủ cách âm, vận hành êm"
    },
    applications: ["Phun sơn công nghiệp", "Sản xuất thực phẩm & đồ uống", "Dược phẩm", "Phòng thí nghiệm R&D"],
    why: "Nếu xưởng của bạn cần nguồn khí nén tuyệt đối sạch — không một giọt dầu lẫn vào lớp sơn hay sản phẩm — SLE là lựa chọn an toàn nhất, đồng thời tủ cách âm giúp môi trường làm việc dễ chịu hơn hẳn máy nén piston thông thường."
  },
  {
    slug: "sle-frd",
    name: "SLE-FRD kèm máy sấy khí lạnh",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free", subCatLabel: "Máy nén khí không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2024/04/SLE-FRD-A1.jpg",
    shortDesc: "Phiên bản SLE tích hợp sẵn máy sấy khí kiểu lạnh, loại ẩm ngay trong một tủ máy.",
    lead: "SLE-FRD kết hợp cụm nén khí scroll không dầu SLE với một máy sấy khí kiểu lạnh (refrigerated dryer) lắp liền khối, giúp loại bỏ hơi ẩm ngay tại nguồn trước khi khí nén đi vào hệ thống ống dẫn — rất quan trọng với các ứng dụng phun sơn yêu cầu bề mặt hoàn thiện không bị rỗ khí ẩm.",
    features: [
      ["✅", "Không dầu, đạt chuẩn ISO 8573-1:2010 Class 0"],
      ["❄️", "Máy sấy khí lạnh tích hợp sẵn, không cần lắp thêm thiết bị rời"],
      ["🔇", "Tủ cách âm, vận hành êm như dòng SLE tiêu chuẩn"],
      ["🎛️", "Tủ điều khiển UL508A, cài đặt áp suất tự động"],
      ["🌬️", "Lọc khí đầu vào 5 micron"],
      ["📉", "Giảm rủi ro ẩm trong đường ống, hạn chế lỗi bề mặt sơn"]
    ],
    specs: {
      "Công nghệ nén": "Trục vít xoắn ốc (scroll), không dầu",
      "Xử lý ẩm": "Máy sấy khí kiểu lạnh (refrigerated dryer) tích hợp",
      "Tiêu chuẩn khí nén": "ISO 8573-1:2010 Class 0",
      "Tủ điều khiển": "UL508A",
      "Lọc khí đầu vào": "5 micron"
    },
    applications: ["Phun sơn ô tô, đồ gỗ yêu cầu khí khô", "Sản xuất thiết bị điện tử", "Xưởng sơn tĩnh điện"],
    why: "Thay vì đầu tư thêm máy sấy khí rời và tốn thêm diện tích lắp đặt, SLE-FRD gói gọn hai chức năng nén khí sạch và sấy khô trong một tủ máy duy nhất — tiết kiệm không gian và giảm điểm rò rỉ đường ống."
  },
  {
    slug: "slt-slte-tank",
    name: "SLT/SLTE Tank Mount",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free", subCatLabel: "Máy nén khí không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/02/SLTE-5_rght-scaled.jpg",
    shortDesc: "Máy nén khí scroll không dầu lắp trên bình chứa khí, phù hợp xưởng cần dự trữ khí lớn.",
    lead: "SLT/SLTE là phiên bản máy nén scroll không dầu được lắp trực tiếp trên bình chứa khí (tank mount), giúp ổn định áp suất khi có nhiều súng phun hoặc thiết bị dùng khí nén hoạt động cùng lúc, đồng thời tiết kiệm diện tích sàn xưởng so với lắp bình chứa rời.",
    features: [
      ["✅", "Không dầu, đạt chuẩn khí sạch Class 0"],
      ["🛢️", "Tích hợp sẵn bình chứa khí, ổn định áp suất tức thời"],
      ["🔇", "Tủ cách âm, vận hành êm"],
      ["🎛️", "Tủ điều khiển UL508A"],
      ["🌬️", "Lọc khí đầu vào 5 micron"],
      ["📐", "Thiết kế gọn, tiết kiệm diện tích lắp đặt"]
    ],
    specs: {
      "Công nghệ nén": "Trục vít xoắn ốc (scroll), không dầu",
      "Kiểu lắp đặt": "Trên bình chứa khí (tank mount)",
      "Tiêu chuẩn khí nén": "ISO 8573-1:2010 Class 0",
      "Tủ điều khiển": "UL508A"
    },
    applications: ["Xưởng sơn ô tô có nhiều cabin", "Nhà máy có nhiều điểm sử dụng khí đồng thời"],
    why: "Bình chứa tích hợp giúp hệ thống khí nén phản ứng tốt hơn với các đợt tiêu thụ khí đột biến (ví dụ nhiều súng phun hoạt động cùng lúc) mà không bị sụt áp."
  },
  {
    slug: "slb-slbe-base",
    name: "SLB/SLBE Base Mount",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free", subCatLabel: "Máy nén khí không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2024/12/SLB-10_frnt.jpg",
    shortDesc: "Máy nén khí scroll không dầu lắp đế rời, không kèm bình chứa, linh hoạt bố trí hệ thống khí.",
    lead: "SLB/SLBE là phiên bản lắp đế (base mount) của dòng máy nén scroll không dầu Anest Iwata — không đi kèm bình chứa khí sẵn, cho phép khách hàng tự chọn dung tích bình chứa và bố trí hệ thống đường ống phù hợp quy mô xưởng.",
    features: [
      ["✅", "Không dầu, đạt chuẩn khí sạch Class 0"],
      ["📐", "Lắp đế linh hoạt, dễ tuỳ biến hệ thống khí nén"],
      ["🔇", "Vận hành êm nhờ tủ cách âm"],
      ["🎛️", "Tủ điều khiển UL508A"],
      ["🌬️", "Lọc khí đầu vào 5 micron"]
    ],
    specs: {
      "Công nghệ nén": "Trục vít xoắn ốc (scroll), không dầu",
      "Kiểu lắp đặt": "Lắp đế (base mount), không kèm bình chứa",
      "Tiêu chuẩn khí nén": "ISO 8573-1:2010 Class 0",
      "Tủ điều khiển": "UL508A"
    },
    applications: ["Xưởng cần tự thiết kế hệ thống khí nén riêng", "Nâng cấp hệ thống khí hiện có"],
    why: "Phù hợp khi xưởng đã có sẵn bình chứa khí hoặc muốn tối ưu chi phí đầu tư ban đầu, chỉ thay thế đúng phần đầu nén."
  },
  {
    slug: "slt-slte-frd",
    name: "SLT/SLTE kèm máy sấy khí lạnh",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free", subCatLabel: "Máy nén khí không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/SLT-SLTE-with-Refridgerated-Dryer-A1-1.jpg",
    shortDesc: "Kết hợp máy nén scroll lắp bình chứa với máy sấy khí lạnh tích hợp, khí ra vừa ổn áp vừa khô.",
    lead: "Phiên bản kết hợp giữa SLT/SLTE (lắp trên bình chứa) và máy sấy khí kiểu lạnh, dành cho các xưởng vừa cần dự trữ khí ổn định áp suất vừa cần khí khô cho công đoạn phun sơn hoàn thiện.",
    features: [
      ["✅", "Không dầu, đạt chuẩn Class 0"],
      ["🛢️", "Tích hợp bình chứa khí"],
      ["❄️", "Máy sấy khí lạnh tích hợp sẵn"],
      ["🔇", "Tủ cách âm"],
      ["🎛️", "Tủ điều khiển UL508A"]
    ],
    specs: {
      "Công nghệ nén": "Scroll không dầu + bình chứa",
      "Xử lý ẩm": "Máy sấy khí kiểu lạnh tích hợp",
      "Tiêu chuẩn khí nén": "ISO 8573-1:2010 Class 0"
    },
    applications: ["Xưởng sơn ô tô cao cấp", "Dây chuyền sơn yêu cầu khí khô và ổn áp đồng thời"],
    why: "Giải pháp trọn gói cho xưởng không muốn đầu tư rời từng thiết bị (đầu nén – bình chứa – máy sấy) mà cần một hệ thống đồng bộ, tiết kiệm thời gian lắp đặt."
  },
  {
    slug: "ofb-ofbe-base",
    name: "OFB/OFBE Base Mount",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free-piston", subCatLabel: "Máy nén khí piston không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/OFB-A1-scaled.jpg",
    shortDesc: "Máy nén khí piston không dầu, lắp đế, chi phí đầu tư hợp lý cho xưởng vừa và nhỏ.",
    lead: "OFB/OFBE là dòng máy nén khí kiểu piston không dầu, lắp đế, phù hợp các xưởng vừa và nhỏ cần nguồn khí sạch nhưng ngân sách đầu tư hợp lý hơn so với công nghệ scroll.",
    features: [
      ["✅", "Không dầu, không lẫn tạp chất vào khí nén"],
      ["📐", "Lắp đế gọn nhẹ, dễ di chuyển vị trí"],
      ["💰", "Chi phí đầu tư hợp lý cho xưởng quy mô vừa và nhỏ"],
      ["🔧", "Bảo trì đơn giản, ít linh kiện hao mòn cần dầu bôi trơn"]
    ],
    specs: {
      "Công nghệ nén": "Piston, không dầu",
      "Kiểu lắp đặt": "Lắp đế (base mount)",
      "Phân khúc": "Xưởng vừa và nhỏ"
    },
    applications: ["Xưởng sửa chữa ô tô nhỏ", "Xưởng mộc, cơ khí quy mô vừa"],
    why: "Lựa chọn tiết kiệm cho các xưởng mới bắt đầu chuyển sang khí nén không dầu mà chưa cần công suất lớn như dòng scroll."
  },
  {
    slug: "oft-ofte-tank",
    name: "OFT/OFTE Tank Mount",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free-piston", subCatLabel: "Máy nén khí piston không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/02/OFT-5_frnt-scaled.jpg",
    shortDesc: "Máy nén khí piston không dầu tích hợp bình chứa, sẵn sàng sử dụng ngay sau lắp đặt.",
    lead: "OFT/OFTE là máy nén piston không dầu lắp sẵn trên bình chứa khí, giúp xưởng có ngay nguồn khí dự trữ ổn định mà không cần đầu tư thêm bình chứa rời.",
    features: [
      ["✅", "Không dầu"],
      ["🛢️", "Tích hợp sẵn bình chứa khí"],
      ["📦", "Sẵn sàng sử dụng ngay, không cần lắp thêm phụ kiện"],
      ["💰", "Chi phí đầu tư hợp lý"]
    ],
    specs: {
      "Công nghệ nén": "Piston, không dầu",
      "Kiểu lắp đặt": "Trên bình chứa khí (tank mount)"
    },
    applications: ["Xưởng sơn nhỏ cần khí ổn áp tức thời", "Garage sửa chữa ô tô"],
    why: "Giải pháp gọn một khối, phù hợp khi xưởng chưa có sẵn hệ thống bình chứa khí và muốn triển khai nhanh."
  },
  {
    slug: "oft-frd",
    name: "OFT kèm máy sấy khí lạnh",
    category: "compressor", categoryLabel: "Máy Nén Khí",
    subCat: "oil-free-piston", subCatLabel: "Máy nén khí piston không dầu",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/OFT-with-Refrgerated-Dryer-A1.jpg",
    shortDesc: "Máy nén piston không dầu tích hợp bình chứa và máy sấy khí lạnh trong một hệ thống.",
    lead: "Phiên bản OFT tích hợp thêm máy sấy khí kiểu lạnh, phù hợp các xưởng sơn nhỏ và vừa cần khí khô để tránh lỗi bề mặt (rỗ, nổi bọt) do hơi ẩm trong đường khí.",
    features: [
      ["✅", "Không dầu"],
      ["🛢️", "Tích hợp bình chứa khí"],
      ["❄️", "Máy sấy khí lạnh tích hợp"],
      ["💰", "Giải pháp trọn gói, chi phí hợp lý"]
    ],
    specs: {
      "Công nghệ nén": "Piston, không dầu",
      "Xử lý ẩm": "Máy sấy khí kiểu lạnh tích hợp",
      "Kiểu lắp đặt": "Trên bình chứa khí"
    },
    applications: ["Xưởng sơn ô tô vừa và nhỏ", "Xưởng mộc cần khí khô cho phun sơn PU/UV"],
    why: "Với xưởng nhỏ nhưng vẫn cần chất lượng khí khô đạt yêu cầu phun sơn hoàn thiện, đây là lựa chọn gọn nhẹ, không cần đầu tư máy sấy rời."
  },
  {
    slug: "isp-series",
    name: "ISP Series",
    category: "vacuum", categoryLabel: "Bơm Chân Không",
    subCat: "dry-scroll", subCatLabel: "Bơm chân không scroll khô",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/ISP-Vacuum-Pumps-A1.jpg",
    shortDesc: "Bơm chân không kiểu scroll khô, tiên phong công nghệ không dầu, độ tin cậy cao.",
    lead: "Anest Iwata là một trong những hãng tiên phong phát triển bơm chân không kiểu cuộn xoắn (scroll) khô trên thế giới. Dòng ISP Series kế thừa công nghệ này: buồng bơm không tiếp xúc trực tiếp, không cần dầu bôi trơn, cho độ chân không ổn định và tuổi thọ vận hành cao trong môi trường công nghiệp liên tục.",
    features: [
      ["✅", "Công nghệ scroll khô — không dầu, không nhiễm bẩn khí hút"],
      ["🔧", "Ít chi tiết hao mòn hơn bơm cánh gạt truyền thống"],
      ["🔇", "Vận hành êm, rung động thấp"],
      ["♻️", "Phù hợp vận hành liên tục 24/7 trong dây chuyền công nghiệp"],
      ["🌡️", "Ổn định hiệu suất hút chân không ở tải liên tục"]
    ],
    specs: {
      "Công nghệ hút chân không": "Scroll khô (dry scroll), không dầu",
      "Kiểu vận hành": "Liên tục, độ tin cậy cao",
      "Bảo trì": "Không cần thay dầu định kỳ như bơm cánh gạt"
    },
    applications: ["Hút chân không đóng gói thực phẩm", "Hệ thống hút chân không trong dược phẩm", "Băng tải hút chân không công nghiệp", "Phòng thí nghiệm, nghiên cứu"],
    why: "Nếu quy trình của bạn không được phép nhiễm dầu (thực phẩm, dược phẩm, phòng sạch), ISP Series là lựa chọn an toàn với chi phí bảo trì dài hạn thấp hơn bơm truyền thống."
  },
  {
    slug: "dvsl-gvsu-series",
    name: "DVSL/GVSU Series",
    category: "vacuum", categoryLabel: "Bơm Chân Không",
    subCat: "dry-scroll", subCatLabel: "Bơm chân không scroll khô",
    img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/DVSL-Vacuum-Pumps-A1.jpg",
    shortDesc: "Bơm chân không scroll khô công suất lớn, dành cho hệ thống hút chân không quy mô nhà máy.",
    lead: "DVSL/GVSU là dòng bơm chân không scroll khô công suất lớn hơn trong hệ sản phẩm Anest Iwata, phục vụ các hệ thống hút chân không tập trung quy mô nhà máy, nơi cần lưu lượng hút lớn và vận hành ổn định trong thời gian dài.",
    features: [
      ["✅", "Công nghệ scroll khô, không dầu"],
      ["💪", "Công suất hút lớn, phù hợp hệ thống tập trung"],
      ["🔇", "Vận hành êm dù chạy công suất cao"],
      ["♻️", "Thiết kế bền, tối ưu cho vận hành công nghiệp liên tục"]
    ],
    specs: {
      "Công nghệ hút chân không": "Scroll khô (dry scroll), không dầu",
      "Phân khúc": "Hệ thống hút chân không tập trung, công suất lớn",
      "Kiểu vận hành": "Liên tục, công nghiệp"
    },
    applications: ["Hệ thống hút chân không trung tâm nhà máy", "Dây chuyền đóng gói công suất lớn", "Ứng dụng công nghiệp nặng"],
    why: "Khi một bơm đơn lẻ không đủ đáp ứng lưu lượng hút của toàn nhà máy, DVSL/GVSU cho công suất lớn hơn trong khi vẫn giữ ưu điểm không dầu của công nghệ scroll."
  }
];
