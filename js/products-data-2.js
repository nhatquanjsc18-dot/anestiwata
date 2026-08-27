/* ============================================================
   ANEST IWATA VIETNAM — Bổ sung nhóm Hệ Thống Cấp Liệu Sơn (Fluid Application)
   Nguồn: https://anestiwataamericas.com/fluid-application/ (trang 1 + 2, 17 sản phẩm)
   ============================================================ */
(function () {
  var list = [
    {
      slug: "dps-120-dps-90",
      name: "DPS-120 | DPS-90",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "low-pressure", subCatLabel: "Cấp liệu áp lực thấp",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/DPS-120-DPS-90-A1.jpg",
      shortDesc: "Bơm sơn màng kép (double diaphragm), cấp liệu ổn định cho súng phun tay và súng tự động.",
      lead: "DPS-120/DPS-90 là bơm sơn kiểu màng kép, lý tưởng để cấp liệu cho cả súng phun thủ công lẫn hệ thống súng phun tự động. Cụm điều khiển khí nén dùng mạch van đôi (double spool) giúp dòng sơn ra đều, hạn chế hiện tượng giật cục thường gặp ở bơm màng đơn, cho lớp phủ mịn và đồng đều hơn.",
      features: [
        ["🫧", "Bơm màng kép, cấp liệu êm cho cả súng tay và súng tự động"],
        ["🎛️", "Mạch khí điều khiển van đôi (double spool) giúp bề mặt sơn mịn hơn"],
        ["🛑", "Hệ thống khí nén ngăn bơm dừng đột ngột giữa chu trình"],
        ["🧹", "Kênh chứa vật liệu tối thiểu, kết cấu dễ tháo lắp vệ sinh, bảo trì"],
        ["🛡️", "Cụm bơm làm bằng vật liệu chống mài mòn"],
        ["📐", "Nhiều kiểu lắp: đế đứng, trên bồn, xe đẩy, treo tường"],
        ["🔗", "Có bản 2 ngả kết nối, chọn chất liệu nhôm hoặc thép không gỉ"]
      ],
      specs: {
        "Kiểu bơm": "Màng kép (double diaphragm)",
        "Điều khiển khí": "Mạch van đôi (double spool)",
        "Vật liệu bơm": "Chống mài mòn, tuỳ chọn nhôm / thép không gỉ",
        "Kiểu lắp đặt": "Đế đứng, bồn, xe đẩy, treo tường"
      },
      applications: ["Xưởng sơn công nghiệp có súng tự động", "Dây chuyền sơn tĩnh cần cấp liệu liên tục", "Cấp liệu cho hệ thống phun sơn nhiều súng"],
      why: "Với các dây chuyền dùng đồng thời súng phun tay và súng tự động, DPS-120/90 cấp liệu ổn định cho cả hai mà không cần đầu tư hai hệ thống bơm riêng biệt."
    },
    {
      slug: "dps-70c-dps-70cn",
      name: "DPS-70C | DPS-70CN",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "low-pressure", subCatLabel: "Cấp liệu áp lực thấp",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/04/DPS-70C-A1.jpg",
      shortDesc: "Bơm sơn màng kép cỡ nhỏ hơn trong họ DPS, cùng công nghệ van đôi cho bề mặt hoàn thiện tốt.",
      lead: "DPS-70C/DPS-70CN là phiên bản nhỏ gọn hơn trong dòng bơm màng kép DPS, giữ nguyên công nghệ mạch khí van đôi giúp cấp liệu đều, phù hợp các dây chuyền có nhu cầu lưu lượng vừa phải nhưng vẫn cần độ ổn định cao khi phun.",
      features: [
        ["🫧", "Bơm màng kép, phù hợp súng tay và súng tự động"],
        ["🎛️", "Mạch khí van đôi cho bề mặt hoàn thiện đẹp"],
        ["🛑", "Chống dừng đột ngột giữa chu trình bơm"],
        ["🧹", "Dễ tháo lắp vệ sinh, kiểm tra, bảo trì"],
        ["🛡️", "Cụm bơm chống mài mòn"],
        ["📐", "Nhiều kiểu lắp đặt: đế, bồn, xe đẩy, treo tường"]
      ],
      specs: {
        "Kiểu bơm": "Màng kép (double diaphragm), cỡ nhỏ gọn",
        "Điều khiển khí": "Mạch van đôi (double spool)",
        "Kiểu lắp đặt": "Đế đứng, bồn, xe đẩy, treo tường"
      },
      applications: ["Xưởng sơn quy mô vừa", "Cấp liệu cho một hoặc vài súng phun"],
      why: "Khi không cần lưu lượng lớn như DPS-120/90, bản 70C/70CN vẫn giữ được độ ổn định dòng sơn nhưng gọn và tiết kiệm chi phí đầu tư hơn."
    },
    {
      slug: "pc-18d",
      name: "PC-18D Bình Áp Lực 2 Quart",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "low-pressure", subCatLabel: "Cấp liệu áp lực thấp",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/03/PC-18D-A1.jpg",
      shortDesc: "Bình cấp sơn áp lực dung tích 2 quart (~1,9L), thân nhôm, áp suất làm việc tối đa 50,5 psi.",
      lead: "PC-18D là bình cấp sơn áp lực (pressure pot) dung tích nhỏ 2 quart, thân nhôm nhẹ, thường dùng đi kèm súng phun áp lực (pressure feed) cho các công việc phun sơn cần mang vác di chuyển hoặc phun trong không gian hẹp.",
      features: [
        ["🛢️", "Thân bình nhôm, dung tích 2 quart (~1,9 lít)"],
        ["📏", "Đầu nối chất lỏng ren G 3/8\""],
        ["🌡️", "Dải nhiệt độ làm việc 5–40°C"],
        ["⚙️", "Áp suất làm việc tối đa 50,5 psi"]
      ],
      specs: {
        "Áp suất làm việc tối đa": "50,5 psi",
        "Đầu nối chất lỏng": "G 3/8\" (PF3/8)",
        "Dung tích": "2 quart (~1,9 lít)",
        "Chất liệu bình": "Nhôm",
        "Dải nhiệt độ": "5–40°C (41–104°F)"
      },
      applications: ["Phun sơn sửa chữa ô tô cỡ nhỏ", "Phun sơn mỹ nghệ, đồ gỗ chi tiết nhỏ", "Công việc cần bình sơn di động"],
      why: "Kích thước nhỏ gọn giúp PC-18D dễ mang theo hiện trường, phù hợp thợ sơn cần cơ động thay vì gắn cố định một hệ thống cấp liệu lớn."
    },
    {
      slug: "pc-18dt",
      name: "PC-18DT Bình Áp Lực Phủ PTFE",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "low-pressure", subCatLabel: "Cấp liệu áp lực thấp",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/03/PC-18DT-A1.jpg",
      shortDesc: "Phiên bản PC-18D với lớp phủ PTFE bên trong, chống bám dính, dễ vệ sinh sau khi dùng sơn đặc biệt.",
      lead: "PC-18DT là biến thể của PC-18D với lớp phủ PTFE ở thành bình, giúp sơn khó bám dính lại thành, dễ vệ sinh hơn khi sử dụng các loại sơn/keo dễ đông cứng hoặc khó rửa trôi bằng dung môi thông thường.",
      features: [
        ["🛡️", "Lớp phủ PTFE chống bám dính bên trong bình"],
        ["🛢️", "Thân nhôm, dung tích 2 quart (~1,9 lít)"],
        ["📏", "Đầu nối chất lỏng ren G 3/8\""],
        ["🌡️", "Dải nhiệt độ làm việc 5–40°C"],
        ["⚙️", "Áp suất làm việc tối đa 50,5 psi"]
      ],
      specs: {
        "Áp suất làm việc tối đa": "50,5 psi",
        "Đầu nối chất lỏng": "G 3/8\" (PF3/8)",
        "Dung tích": "2 quart (~1,9 lít)",
        "Lớp phủ trong": "PTFE chống bám dính",
        "Dải nhiệt độ": "5–40°C (41–104°F)"
      },
      applications: ["Phun các loại sơn/keo dễ đông cứng, khó vệ sinh", "Ứng dụng công nghiệp cần vệ sinh bình thường xuyên"],
      why: "Nếu loại vật liệu bạn phun hay bám dính cứng đầu vào thành bình thông thường, lớp phủ PTFE giúp tiết kiệm đáng kể thời gian vệ sinh giữa các ca làm việc."
    },
    {
      slug: "pc-18dm",
      name: "PC-18DM Bình Áp Lực 2 Quart",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "low-pressure", subCatLabel: "Cấp liệu áp lực thấp",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/03/PC-18DM-A1.jpg",
      shortDesc: "Biến thể PC-18 dùng đầu nối khác (G 3/8\" không ren PF), cùng dung tích và áp suất làm việc.",
      lead: "PC-18DM là một biến thể khác trong họ bình áp lực PC-18, cùng dung tích 2 quart và áp suất làm việc tối đa tương đương, khác ở kiểu đầu nối chất lỏng để tương thích với các cụm súng phun/đường ống khác nhau.",
      features: [
        ["🛢️", "Thân nhôm, dung tích 2 quart (~1,9 lít)"],
        ["📏", "Đầu nối chất lỏng G 3/8\""],
        ["🌡️", "Dải nhiệt độ làm việc 5–40°C"],
        ["⚙️", "Áp suất làm việc tối đa 50,5 psi"]
      ],
      specs: {
        "Áp suất làm việc tối đa": "50,5 psi",
        "Đầu nối chất lỏng": "G 3/8\"",
        "Dung tích": "2 quart (~1,9 lít)",
        "Chất liệu bình": "Nhôm",
        "Dải nhiệt độ": "5–40°C (41–104°F)"
      },
      applications: ["Phun sơn sửa chữa ô tô cỡ nhỏ", "Thay thế/tương thích hệ thống đường ống đã có sẵn"],
      why: "Cùng thông số vận hành với PC-18D nhưng đầu nối khác giúp bạn chọn đúng phiên bản tương thích với súng phun và đường ống hiện có."
    },
    {
      slug: "pet-10",
      name: "PET-10 Bình Áp Lực 2,5 Gallon",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "low-pressure", subCatLabel: "Cấp liệu áp lực thấp",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/03/PET-10-A1.jpg",
      shortDesc: "Bình áp lực cỡ lớn 2,5 gallon, lót thép không gỉ tháo rời được, hai đồng hồ chỉnh áp độc lập.",
      lead: "PET-10 là bình cấp sơn áp lực hạng nặng dung tích 2,5 gallon, có lớp lót trong bằng thép không gỉ tháo rời được cùng ống hút thép không gỉ, giúp vệ sinh nhanh và dùng được cho cả sơn gốc dung môi lẫn gốc nước với bất kỳ súng phun áp lực nào của Anest Iwata.",
      features: [
        ["🛡️", "Lớp lót trong bằng thép không gỉ, tháo rời để vệ sinh dễ dàng"],
        ["🎨", "Dùng được cho cả sơn gốc dung môi và gốc nước"],
        ["🎛️", "Hai đồng hồ điều áp độc lập cho khí và chất lỏng"],
        ["🔌", "Đầu nối khí 1/4\", đầu nối chất lỏng 3/8\""],
        ["⚙️", "Áp suất làm việc tối đa 58 psi"]
      ],
      specs: {
        "Dung tích": "2,5 gallon (~9,5 lít)",
        "Lớp lót trong": "Thép không gỉ, tháo rời được",
        "Áp suất làm việc tối đa": "58 psi",
        "Đầu nối khí": "1/4\"",
        "Đầu nối chất lỏng": "3/8\""
      },
      applications: ["Xưởng sơn công nghiệp cần dung tích lớn", "Phun sơn gốc nước lẫn gốc dung môi trên cùng một bình"],
      why: "Lớp lót thép không gỉ tháo rời là điểm khác biệt lớn nhất — giúp vệ sinh triệt để khi đổi màu hoặc đổi loại sơn, điều mà bình nhôm liền khối khó làm được."
    },
    {
      slug: "icon-m433n-m333n",
      name: "iCon-M433N 36:1 & iCon-M333N 32:1",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/02/iCon-4333-and-3333-A1.jpg",
      shortDesc: "Bơm cấp liệu đa năng iCon, kết hợp ưu điểm airless (nhanh, ít hao sơn) và air-spray (mịn) — tỉ số 36:1/32:1.",
      lead: "Dòng bơm iCon-M433N (tỉ số nén 36:1) và iCon-M333N (32:1) kết hợp ưu điểm của công nghệ airless — tốc độ cao, ít sơn bay hao — với ưu điểm của air spray truyền thống là lớp phủ mịn, phù hợp nhiều ứng dụng khác nhau khi dùng cùng súng tự động air-assisted hoặc súng tay MSGS-200.",
      features: [
        ["⚙️", "Tỉ số áp lực 36:1 (M433N) hoặc 32:1 (M333N)"],
        ["🔩", "Vòng đệm (packing) tự điều chỉnh, giảm mài mòn xy-lanh"],
        ["🛡️", "Toàn bộ chi tiết tiếp xúc chất lỏng bằng thép không gỉ, chịu được dung môi và sơn gốc nước"],
        ["🎯", "Động cơ khí có van pilot tác động kép, hoạt động bền bỉ trong điều kiện xưởng khắc nghiệt"],
        ["✨", "Chi tiết bên trong mạ crom cứng, giảm ma sát, tăng độ bền"],
        ["💎", "Đế van chất lỏng bằng carbide, tăng tuổi thọ vận hành"],
        ["📐", "Lắp xe đẩy hoặc treo tường, có thể lắp thêm phễu tuỳ chọn"]
      ],
      specs: {
        "Tỉ số áp lực": "36:1 (M433N) / 32:1 (M333N)",
        "Vật liệu tiếp xúc chất lỏng": "Thép không gỉ toàn bộ",
        "Đế van chất lỏng": "Carbide",
        "Chi tiết bên trong": "Mạ crom cứng",
        "Kiểu lắp đặt": "Xe đẩy hoặc treo tường, phễu tuỳ chọn"
      },
      applications: ["Dây chuyền phun sơn tự động", "Xưởng sơn công nghiệp lưu lượng lớn", "Phun sơn gốc dung môi và gốc nước"],
      why: "Khi cần vừa tốc độ phun nhanh của công nghệ airless vừa chất lượng mịn của air-spray, dòng iCon là lựa chọn cân bằng tốt nhất trong danh mục cấp liệu áp lực cao của Anest Iwata."
    },
    {
      slug: "icon-m233n",
      name: "iCon-M233N 30:1",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/02/iCon-X-3-A1.jpg",
      shortDesc: "Bơm cấp liệu iCon tỉ số 30:1, phiên bản nhỏ hơn trong họ iCon, cùng công nghệ air-assisted airless.",
      lead: "iCon-M233N là bản tỉ số nén 30:1 trong họ bơm iCon, phù hợp các ứng dụng cần lưu lượng vừa phải nhưng vẫn muốn tận dụng ưu điểm kết hợp airless và air-spray của công nghệ iCon.",
      features: [
        ["⚙️", "Tỉ số áp lực 30:1"],
        ["🔩", "Vòng đệm tự điều chỉnh, giảm mài mòn xy-lanh"],
        ["🛡️", "Chi tiết tiếp xúc chất lỏng bằng thép không gỉ"],
        ["🎯", "Động cơ khí van pilot tác động kép, độ tin cậy cao"],
        ["✨", "Nội thất mạ crom cứng, giảm ma sát"]
      ],
      specs: {
        "Tỉ số áp lực": "30:1",
        "Vật liệu tiếp xúc chất lỏng": "Thép không gỉ",
        "Chi tiết bên trong": "Mạ crom cứng"
      },
      applications: ["Xưởng sơn công nghiệp vừa", "Phun sơn gốc dung môi và gốc nước với lưu lượng vừa phải"],
      why: "Với xưởng chưa cần tỉ số nén cao như M433N/M333N, iCon-M233N vẫn mang lại độ ổn định và tuổi thọ tương đương nhưng đầu tư nhẹ nhàng hơn."
    },
    {
      slug: "alg-7-alg-72-alg-73",
      name: "ALG-7 | ALG-72 | ALG-73",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/ALG-7-MAIN.jpg",
      shortDesc: "Súng phun airless, hiệu suất chuyển sơn trên 95%, giảm hao sơn và overspray đáng kể.",
      lead: "ALG-7 là súng phun airless lý tưởng cho các ứng dụng cần phun nhanh nhưng vẫn hiệu quả với cả sơn gốc nước và gốc dung môi. Với hiệu suất chuyển sơn (transfer efficiency) trên 95%, lượng sơn bay hao (overspray) và lãng phí vật liệu giảm đáng kể so với súng phun thông thường.",
      features: [
        ["🎯", "Hiệu suất chuyển sơn trên 95%"],
        ["💨", "Công nghệ airless cho tốc độ phun nhanh"],
        ["🎨", "Dùng được cho cả sơn gốc nước và gốc dung môi"],
        ["♻️", "Giảm đáng kể lượng sơn hao phí do overspray"]
      ],
      specs: {
        "Công nghệ phun": "Airless",
        "Hiệu suất chuyển sơn": "> 95%",
        "Loại vật liệu": "Gốc nước và gốc dung môi"
      },
      applications: ["Phun sơn công nghiệp diện tích lớn", "Sơn kết cấu thép, khung nhà xưởng", "Ứng dụng cần tối ưu chi phí vật liệu sơn"],
      why: "Khi chi phí sơn hao phí do overspray là mối lo lớn, hiệu suất chuyển sơn trên 95% của ALG-7 giúp tiết kiệm vật liệu rõ rệt trên các bề mặt lớn."
    },
    {
      slug: "msgs-200",
      name: "MSGS-200",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/MSGS-200-MAIN1.jpg",
      shortDesc: "Súng phun tay đa năng kết hợp airless và air-spray, thân mạ crom, cầm nhẹ tay, ít mỏi cổ tay.",
      lead: "MSGS-200 kết hợp ưu điểm tốc độ và ít hao sơn của công nghệ airless với chất lượng hoàn thiện mịn của công nghệ air-spray truyền thống, cho hiệu suất chuyển sơn cao cùng chất lượng bề mặt tốt. Súng được cân bằng trọng lượng kỹ, cò bóp nhẹ, giảm mỏi tay khi dùng liên tục.",
      features: [
        ["⚡", "Kết hợp công nghệ airless và air-spray, hiệu suất chuyển sơn cao"],
        ["✋", "Cò bóp nhẹ, thiết kế cân bằng tốt, giảm mỏi tay"],
        ["✨", "Thân súng mạ crom, dễ vệ sinh và bảo trì"],
        ["🔄", "Xoay chụp khí (air cap) nhanh, thao tác đơn giản"],
        ["🛡️", "Vòng đệm PTFE và bảo vệ nhựa giúp chỉnh chụp khí chính xác, dễ dàng"]
      ],
      specs: {
        "Công nghệ phun": "Kết hợp airless + air-spray",
        "Thân súng": "Mạ crom",
        "Vòng đệm": "PTFE"
      },
      applications: ["Phun sơn công nghiệp thủ công cần tốc độ và chất lượng cao", "Sử dụng liên tục nhiều giờ trong ca làm việc"],
      why: "Thợ sơn thao tác súng liên tục nhiều giờ mỗi ngày, và trọng lượng cân bằng cùng cò bóp nhẹ của MSGS-200 giúp giảm mỏi tay rõ rệt so với súng phun áp lực thông thường."
    },
    {
      slug: "msu-11n-32n",
      name: "MSU 11N 13:1 | MSU 32N 17:1",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/MSU-11N-32N-MAIN.jpg",
      shortDesc: "Cụm bơm cấp liệu tỉ số 13:1/17:1, đi kèm bộ lọc, ống hồi lưu và van an toàn quá áp.",
      lead: "MSU 11N (tỉ số 13:1) và MSU 32N (tỉ số 17:1) là cụm bơm cấp liệu sơn được trang bị đầy đủ phụ kiện đi kèm để vận hành ổn định ngay khi lắp đặt: bộ điều áp khí, bộ lọc sơn, ống hút có lọc và ống hồi lưu chất lỏng.",
      features: [
        ["🎛️", "Có sẵn bộ điều áp khí (air regulator)"],
        ["🧹", "Bộ lọc sơn (paint filter unit) tích hợp"],
        ["🧲", "Ống hút có lọc (dip tube with filter)"],
        ["🔄", "Ống hồi lưu chất lỏng (fluid recirculation hose)"],
        ["🛑", "Van an toàn quá áp (overpressure valve)"]
      ],
      specs: {
        "Tỉ số áp lực": "13:1 (MSU 11N) / 17:1 (MSU 32N)",
        "Phụ kiện đi kèm": "Bộ điều áp, lọc sơn, ống hút lọc, ống hồi lưu, van quá áp"
      },
      applications: ["Xưởng sơn công nghiệp cần bơm trọn bộ, lắp đặt nhanh", "Dây chuyền cần kiểm soát áp lực chặt chẽ"],
      why: "Vì đã tích hợp sẵn bộ lọc, ống hồi lưu và van an toàn, MSU 11N/32N giúp giảm chi phí và thời gian mua sắm phụ kiện rời khi triển khai hệ thống mới."
    },
    {
      slug: "msu-323-423",
      name: "MSU-323 C | MSU-323 CTX | MSU-423 TX | MSU-433 TX",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/MSU-323-423-MAIN.jpg",
      shortDesc: "Cụm bơm cấp liệu gắn xe đẩy, dùng cho cả sơn gốc dung môi và gốc nước, có ống chống rung tuỳ chọn.",
      lead: "Họ bơm MSU-323/423 được lắp sẵn trên xe đẩy cùng đầy đủ phụ kiện vận hành, phù hợp cả sơn gốc dung môi lẫn gốc nước, có tuỳ chọn thêm ống chống rung xung (antipulsation hose) để dòng sơn ra càng ổn định hơn.",
      features: [
        ["🛒", "Lắp sẵn trên xe đẩy, di chuyển linh hoạt trong xưởng"],
        ["🎨", "Dùng được cho cả sơn gốc dung môi và gốc nước"],
        ["🎛️", "Có sẵn bộ điều áp khí, bộ lọc sơn, ống hút lọc, ống hồi lưu, van quá áp"],
        ["🌊", "Tuỳ chọn ống chống rung xung (antipulsation hose)"]
      ],
      specs: {
        "Kiểu lắp đặt": "Xe đẩy (cart mount)",
        "Loại vật liệu": "Gốc dung môi và gốc nước",
        "Phụ kiện tuỳ chọn": "Ống chống rung xung (antipulsation hose)"
      },
      applications: ["Xưởng sơn cần di chuyển bơm giữa nhiều trạm làm việc", "Ứng dụng cần dòng sơn cực ổn định, không rung xung"],
      why: "Bánh xe đẩy giúp một cụm bơm phục vụ được nhiều trạm phun trong xưởng thay vì phải lắp cố định nhiều bơm riêng lẻ."
    },
    {
      slug: "als-333-433",
      name: "ALS-333 C | ALS-423 TX | ALS-433 C | ALS-433 TX",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/ALS-333-ALS-433-ALS-423-MAIN.jpg",
      shortDesc: "Cụm bơm cấp liệu gắn xe đẩy tương tự dòng MSU, dùng cho sơn gốc dung môi và gốc nước.",
      lead: "ALS-333/423/433 là một họ bơm cấp liệu khác lắp trên xe đẩy, cấu hình phụ kiện tương tự dòng MSU (bộ điều áp, lọc sơn, ống hút lọc, ống hồi lưu, van quá áp), phù hợp cả sơn gốc dung môi và gốc nước, có tuỳ chọn ống chống rung xung.",
      features: [
        ["🛒", "Lắp sẵn trên xe đẩy"],
        ["🎨", "Dùng cho cả sơn gốc dung môi và gốc nước"],
        ["🎛️", "Đầy đủ phụ kiện: điều áp khí, lọc sơn, ống hút lọc, ống hồi lưu, van quá áp"],
        ["🌊", "Tuỳ chọn ống chống rung xung"]
      ],
      specs: {
        "Kiểu lắp đặt": "Xe đẩy (cart mount)",
        "Loại vật liệu": "Gốc dung môi và gốc nước",
        "Phụ kiện tuỳ chọn": "Ống chống rung xung"
      },
      applications: ["Xưởng sơn công nghiệp cần bơm cấp liệu di động", "Kết hợp với súng airless ALG-7"],
      why: "Đây là lựa chọn thay thế/bổ sung cho dòng MSU khi cần thêm cụm bơm cấp liệu di động trong cùng hệ thống nhà máy."
    },
    {
      slug: "pt-10d-80d",
      name: "PT-10D | PT-20D | PT-40D | PT-60D | PT-80D",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "pump-accessories", subCatLabel: "Bồn chứa & phụ kiện bơm",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/PT-D-MAIN.jpg",
      shortDesc: "Bồn chứa sơn dung tích 10–80 lít, có bản khuấy khí nén hoặc bản không khuấy.",
      lead: "Họ bồn chứa PT-D có dải dung tích rộng từ 10 đến 80 lít, đáp ứng nhiều quy mô xưởng khác nhau, với tuỳ chọn cấu hình khuấy bằng khí nén hoặc không khuấy. Hệ thống nắp đậy được gia công chính xác giúp thao tác đóng/mở, tiếp liệu dễ dàng.",
      features: [
        ["📏", "Dải dung tích từ 10L đến 80L"],
        ["🌀", "Có bản khuấy khí nén hoặc bản thủ công (không khuấy)"],
        ["🔧", "Hệ thống nắp đậy gia công chính xác, dễ mở để tiếp liệu, vệ sinh"]
      ],
      specs: {
        "Dải dung tích": "10L – 80L",
        "Cấu hình": "Khuấy khí nén hoặc không khuấy",
        "Nắp đậy": "Gia công chính xác, thao tác nhanh"
      },
      applications: ["Cấp liệu cho hệ thống bơm iCon/MSU/ALS", "Xưởng cần trữ lượng sơn lớn tại chỗ"],
      why: "Việc có nhiều mức dung tích từ 10L đến 80L giúp bạn chọn đúng quy mô bồn theo sản lượng thực tế của xưởng, tránh lãng phí hoặc thiếu hụt."
    },
    {
      slug: "pt-10dm-80dm",
      name: "PT-10DM | PT-20DM | PT-40DM | PT-60DM | PT-80DM",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "pump-accessories", subCatLabel: "Bồn chứa & phụ kiện bơm",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/PT-10DM-A1.jpg",
      shortDesc: "Phiên bản khác của bồn chứa PT-D, cùng dải dung tích 10–80 lít.",
      lead: "PT-DM là biến thể khác của họ bồn chứa PT-D, cùng dải dung tích 10–80 lít và cấu hình khuấy khí nén hoặc không khuấy, khác về kiểu kết nối/phụ kiện đi kèm để tương thích với các cụm bơm khác nhau trong hệ thống.",
      features: [
        ["📏", "Dải dung tích từ 10L đến 80L"],
        ["🌀", "Có bản khuấy khí nén hoặc bản thủ công"],
        ["🔧", "Nắp đậy gia công chính xác, dễ thao tác"]
      ],
      specs: {
        "Dải dung tích": "10L – 80L",
        "Cấu hình": "Khuấy khí nén hoặc không khuấy"
      },
      applications: ["Cấp liệu cho hệ thống bơm cỡ trung và lớn", "Thay thế/mở rộng hệ thống bồn hiện có"],
      why: "Cùng dải dung tích với PT-D nhưng khác kiểu kết nối, PT-DM là lựa chọn khi cần tương thích với cụm bơm hoặc đường ống đã lắp đặt sẵn."
    },
    {
      slug: "pet-10n-mn-50n-mn",
      name: "PET-10N/MN | PET-30N/MN | PET-50N/MN",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "pump-accessories", subCatLabel: "Bồn chứa & phụ kiện bơm",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/PET-N-NM_MAIN.jpg",
      shortDesc: "Bồn chứa thép không gỉ đánh bóng bên trong, dải dung tích 10–50 lít, có bản khuấy 3 piston êm.",
      lead: "PET-N/MN là dòng bồn chứa thân thép không gỉ với bề mặt trong đánh bóng cùng ống hút bằng thép không gỉ, có dải dung tích từ 10 đến 50 lít, cả bản khuấy và không khuấy. Bản khuấy (MN) dùng cơ cấu khuấy ba piston vận hành êm và hiệu quả.",
      features: [
        ["🛡️", "Thân thép không gỉ, bề mặt trong đánh bóng"],
        ["🧲", "Ống hút bằng thép không gỉ"],
        ["📏", "Dải dung tích 10L – 50L"],
        ["🌀", "Bản MN dùng cơ cấu khuấy 3 piston, vận hành êm và hiệu quả"]
      ],
      specs: {
        "Chất liệu": "Thép không gỉ, bên trong đánh bóng",
        "Dải dung tích": "10L – 50L",
        "Cơ cấu khuấy (bản MN)": "3 piston, vận hành êm"
      },
      applications: ["Sơn cần độ đồng nhất cao khi khuấy liên tục", "Ứng dụng yêu cầu vệ sinh nghiêm ngặt (bồn thép không gỉ dễ làm sạch hơn nhôm)"],
      why: "Thân thép không gỉ đánh bóng bên trong giúp bồn PET-N/MN bền hơn với hóa chất mạnh và dễ vệ sinh triệt để hơn so với bồn nhôm thông thường."
    },
    {
      slug: "icon-flatline",
      name: "iCon Flatline Coating System",
      category: "fluid", categoryLabel: "Hệ Thống Cấp Liệu Sơn",
      subCat: "medium-high-pressure", subCatLabel: "Cấp liệu áp lực trung bình & cao",
      img: "https://anestiwataamericas.com/wp-content/uploads/2025/06/Flatline-System-A1.jpg",
      shortDesc: "Hệ thống cấp liệu iCon cho dây chuyền sơn phẳng (flatline), tỉ số 32:1/36:1, tích hợp nhiều súng tự động.",
      lead: "iCon Flatline Coating System là cấu hình chuyên biệt của dòng iCon dành cho dây chuyền sơn tấm phẳng (flatline), có hai tỉ số áp lực 32:1 và 36:1, phù hợp cả sơn gốc nước lẫn gốc dung môi. Hệ thống đảm bảo hiệu suất đồng đều khi kết nối cùng lúc nhiều súng phun tự động — điều quan trọng với dây chuyền sản xuất liên tục.",
      features: [
        ["🔗", "Tích hợp liền mạch với nhiều súng phun tự động cùng lúc"],
        ["🧹", "Bộ lọc ngoài và van hồi lưu giúp mồi bơm, vệ sinh nhanh"],
        ["🎨", "Dùng được cho sơn gốc nước và gốc dung môi"],
        ["⚙️", "Có hai tỉ số áp lực 32:1 hoặc 36:1"],
        ["🎛️", "Tuỳ chọn thêm bộ điều áp cao cấp để kiểm soát áp lực chính xác"]
      ],
      specs: {
        "Tỉ số áp lực": "32:1 hoặc 36:1",
        "Loại vật liệu": "Gốc nước và gốc dung môi",
        "Ứng dụng chính": "Dây chuyền sơn tấm phẳng (flatline)"
      },
      applications: ["Dây chuyền sơn phẳng công nghiệp (panel, tấm ván)", "Nhà máy sản xuất liên tục nhiều súng tự động"],
      why: "Khi dây chuyền của bạn có nhiều súng phun tự động chạy song song trên một băng chuyền phẳng, iCon Flatline đảm bảo áp lực đồng đều tới từng súng — tránh tình trạng lớp phủ không đồng nhất giữa các vị trí."
    }
  ];
  window.PRODUCTS = (window.PRODUCTS || []).concat(list);
})();
