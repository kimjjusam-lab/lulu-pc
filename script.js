// === i18n / 다국어 지원 ===
const i18n = {
  ko: {
    // 네비게이션
    nav_lobby: '로비',
    nav_tournament: '토너먼트',
    nav_custom_game: '사용자게임',
    nav_analytics: '통계',
    nav_shop: '상점',
    nav_my: 'MY 룰루',
    nav_login: '로그인',
    nav_gold: '1,250억',

    // 배너 서브타이틀
    banner1_sub: '친구들과 함께하는 짜릿한 올나잇 포커',
    banner2_sub: '매주 열리는 토너먼트에서 최고의 실력을 증명하세요',
    banner3_sub: '지금 가입하면 무료 칩 10,000개 즉시 지급!',
    banner4_sub: '친구를 초대하고 프라이빗 룸에서 자유롭게 즐기세요',
    banner5_sub: '발렌타인 시즌 한정 보상과 특별 테이블 오픈!',
    banner6_sub: '다이아몬드 멤버십으로 독점 혜택을 누리세요',

    // 로비 섹션
    lobby_game_modes: '게임 모드',
    lobby_view_all: '전체보기 →',
    lobby_live_tables: '라이브 테이블',
    lobby_more: '더보기 →',
    lobby_my_stats: '내 통계 요약',
    lobby_detail: '자세히 →',

    // 게임 모드
    game_tournament: '토너먼트',
    game_tournament_desc: '실력을 겨루는 정식 토너먼트. 순위에 따른 보상을 획득하세요.',
    game_tournament_players: '1,247명 참가 중',
    // 토너먼트 페이지
    tk_title: '티켓',
    tk_desc: '보유 중인 티켓을 확인하세요',
    tk_summary_label: '보유 티켓',
    tk_expire: '만료일',
    tk_days_left: '일 남음',
    tnh_title: '히스토리',
    tnh_desc: '종료된 토너먼트 기록을 확인하세요',
    tn_title: '토너먼트',
    tn_desc: '다양한 토너먼트에 참가하고 보상을 획득하세요',
    tn_tab_all: '전체',
    tn_tab_my: '내 토너먼트',
    tn_tab_history: '히스토리',
    tn_status_registering: '등록중',
    tn_status_ongoing: '진행중',
    tn_status_finished: '종료',
    tn_starts_in: 'Starts In',
    tn_manual_start: '수동 시작',
    tn_fee_free: '무료',
    tn_empty: '등록된 토너먼트가 없습니다',
    tn_history_empty: '완료된 토너먼트가 없습니다',
    game_custom: '사용자 게임',
    game_custom_desc: '나만의 룰로 방을 만들고, 친구를 초대해서 즐기세요.',
    game_custom_players: '856개 방 운영 중',

    // 테이블
    table_rookie: '🃏 루키 테이블',
    table_highroller: '♠️ 하이롤러',
    table_vip: '💎 VIP 라운지',
    table_blind: '블라인드',
    table_players: '플레이어',
    table_buyin: '바이인',
    table_join: '입장하기',

    // 통계
    stat_total_games: '총 게임',
    stat_winrate: '승률',
    stat_total_profit: '총 수익',
    stat_best_streak: '연승 최고',
    stat_wins: '승리',
    stat_losses: '패배',
    stat_chips: '티켓',
    stat_level: '레벨',

    // 통계 페이지
    analytics_title: '내 통계',
    analytics_desc: '게임 기록과 성과를 한눈에 확인하세요',
    chart_weekly: '📈 주간 성과',
    chart_hand: '🃏 핸드 분석',
    hand_best: '최다 승리 핸드',
    hand_worst: '최다 패배 핸드',
    day_mon: '월', day_tue: '화', day_wed: '수', day_thu: '목',
    day_fri: '금', day_sat: '토', day_sun: '일',

    // 상점
    shop_title: '상점',
    shop_desc: '칩, 아이템, 스킨을 구매하세요',
    shop_tab_recommend: '⭐ 추천 상품',
    shop_tab_gems: '💎 보석',
    shop_tab_avatar: '👤 아바타',
    shop_tab_items: '🎁 아이템',
    shop_buy: '구매하기',
    shop_avatar_title: '아바타 세트',
    shop_recommend_title: '스타터 패키지',
    pkg_a_name: '스타터 패키지 A', pkg_a_item1: '아바타 A (15일)', pkg_a_item2: '5억 골드',
    pkg_b_name: '스타터 패키지 B', pkg_b_item1: '아바타 B (15일)', pkg_b_item2: '15억 골드',
    pkg_c_name: '스타터 패키지 C', pkg_c_item1: '아바타 C (15일)', pkg_c_item2: '바이인 티켓 10억', pkg_c_item3: '15억 골드',
    pkg_d_name: '스타터 패키지 D', pkg_d_item1: '아바타 D (15일)', pkg_d_item2: '바이인 티켓 20억', pkg_d_item3: '30억 골드',
    pkg_e_name: '스타터 패키지 E', pkg_e_item1: '아바타 E (15일)', pkg_e_item2: '바이인 티켓 60억', pkg_e_item3: '90억 골드',
    pkg_f_name: '스타터 패키지 F', pkg_f_item1: '아바타 F (15일)', pkg_f_item2: '바이인 티켓 100억', pkg_f_item3: '150억 골드',

    // 보석 탭
    shop_gem_title: '보석',
    gem_1_name: '보석 10개', gem_1_item1: '보석 10개',
    gem_2_name: '보석 30개', gem_2_item1: '보석 30개', gem_2_item2: '보너스 보석 +2개',
    gem_3_name: '보석 50개', gem_3_item1: '보석 50개', gem_3_item2: '보너스 보석 +5개',
    gem_4_name: '보석 100개', gem_4_item1: '보석 100개', gem_4_item2: '보너스 보석 +15개',
    gem_5_name: '보석 300개', gem_5_item1: '보석 300개', gem_5_item2: '보너스 보석 +60개', gem_5_item3: '5억 골드',
    gem_6_name: '보석 500개', gem_6_item1: '보석 500개', gem_6_item2: '보너스 보석 +125개', gem_6_item3: '10억 골드',
    gem_7_name: '보석 1,000개', gem_7_item1: '보석 1,000개', gem_7_item2: '보너스 보석 +300개', gem_7_item3: '30억 골드', gem_7_item4: '바이인 티켓 10억',
    gem_8_name: '보석 3,000개', gem_8_item1: '보석 3,000개', gem_8_item2: '보너스 보석 +1,000개', gem_8_item3: '100억 골드', gem_8_item4: '바이인 티켓 30억',
    gem_9_name: '보석 5,000개', gem_9_item1: '보석 5,000개', gem_9_item2: '보너스 보석 +2,000개', gem_9_item3: '200억 골드', gem_9_item4: '바이인 티켓 50억', gem_9_item5: 'VIP 아바타 (30일)',

    // 아바타 세트 탭
    avatar_g_name: '아바타 세트 G', avatar_g_item1: '아바타 G (15일)', avatar_g_item2: '보석 10개', avatar_g_item3: '5억 골드',
    avatar_h_name: '아바타 세트 H', avatar_h_item1: '아바타 H (15일)', avatar_h_item2: '보석 30개', avatar_h_item3: '15억 골드',
    avatar_i_name: '아바타 세트 I', avatar_i_item1: '아바타 I (15일)', avatar_i_item2: '보석 50개', avatar_i_item3: '25억 골드',
    avatar_j_name: '아바타 세트 J', avatar_j_item1: '아바타 J (15일)', avatar_j_item2: '보석 100개', avatar_j_item3: '50억 골드',
    avatar_k_name: '아바타 세트 K', avatar_k_item1: '아바타 K (15일)', avatar_k_item2: '보석 300개', avatar_k_item3: '150억 골드',
    avatar_l_name: '아바타 세트 L', avatar_l_item1: '아바타 L (15일)', avatar_l_item2: '보석 500개', avatar_l_item3: '250억 골드',
    avatar_m_name: '아바타 세트 M', avatar_m_item1: '아바타 M (15일)', avatar_m_item2: '보석 1,000개', avatar_m_item3: '500억 골드',
    avatar_n_name: '아바타 세트 N', avatar_n_item1: '아바타 N (15일)', avatar_n_item2: '보석 3,000개', avatar_n_item3: '1,500억 골드',

    // 아이템 탭
    shop_table_skins: '테이블 스킨',
    skin_classic_green: '클래식 그린',
    skin_classic_green_desc: '전통적인 포커 테이블',
    skin_royal_red: '로열 레드',
    skin_royal_red_desc: '프리미엄 레드 테이블',
    skin_cosmic_black: '코스믹 블랙',
    skin_cosmic_black_desc: '우주 컨셉 한정 스킨',
    shop_card_skins: '카드 스킨',
    skin_gold_card: '골드 카드',
    skin_gold_card_desc: '고급 골드 카드 뒷면',
    skin_neon_card: '네온 카드',
    skin_neon_card_desc: '빛나는 네온 카드 디자인',
    skin_diamond_card: '다이아몬드 카드',
    skin_diamond_card_desc: 'VIP 한정 다이아몬드 디자인',
    shop_emotes: '이모티콘',
    emote_pokerface: '포커페이스 팩',
    emote_pokerface_desc: '기본 이모티콘 8종',
    emote_drama: '드라마 팩',
    emote_drama_desc: '연기파 이모티콘 12종',
    emote_allin: '올인 팩',
    emote_allin_desc: '시즌3 한정 이모티콘 6종',

    // MY 페이지
    my_title: 'MY 룰루',
    my_desc: '내 프로필과 게임 정보를 관리하세요',
    my_info_sub: '가입일: 2025.01.15 · 레벨 23',
    my_profile: '회원정보 수정',
    my_history: '거래 내역',
    my_friends: '친구 관리',
    my_items: '내 아이템',
    my_settings: '설정',
    my_message: '우편함',
    my_host: '호스트',
    my_tn_history: '히스토리',
    host_title: '호스트',
    host_desc: '내가 개설한 토너먼트를 관리하세요',
    host_search_ph: '게임 제목을 검색하세요.',
    host_search_btn: '검색',
    host_empty: '개설한 토너먼트가 없습니다',
    tx_title: '거래 내역',
    tx_desc: '골드와 다이아의 충전·소모 내역을 확인하세요',
    tx_tab_all: '전체',
    tx_tab_gold: '골드',
    tx_tab_diamond: '다이아',
    tx_empty: '거래 내역이 없습니다',
    tx_after: '잔액',
    mb_title: '우편함',
    mb_desc: '받은 우편을 확인하세요',
    mb_btn_claim: '아이템 받기',
    mb_btn_done: '받기 완료',
    mb_empty: '우편이 없습니다',
    ae_title: '회원정보 수정',
    ae_desc: '비밀번호를 변경할 수 있습니다',
    ae_id_label: '아이디',
    ae_pw_title: '비밀번호 변경',
    ae_current_pw: '현재 비밀번호',
    ae_current_pw_ph: '현재 비밀번호 입력',
    ae_new_pw: '새 비밀번호',
    ae_new_pw_ph: '새 비밀번호 입력',
    ae_confirm_pw: '새 비밀번호 확인',
    ae_confirm_pw_ph: '새 비밀번호 다시 입력',
    ae_pw_btn: '비밀번호 변경',
    ae_pw_success: '비밀번호가 변경되었습니다',
    ae_pw_mismatch: '새 비밀번호가 일치하지 않습니다',
    ae_pw_wrong: '현재 비밀번호가 올바르지 않습니다',
    ae_pw_empty: '모든 항목을 입력해주세요',
    avatar_modal_title: '아바타 선택',
    avatar_modal_apply: '아바타 착용',
    nickname_modal_title: '닉네임 수정',
    nickname_modal_save: '저장',
    nickname_modal_error_empty: '닉네임을 입력하세요',
    nickname_modal_error_short: '닉네임은 2자 이상이어야 합니다',
    nickname_modal_error_duplicate: '이미 사용 중인 닉네임입니다',
    avatar_modal_quit_text: '게임 탈퇴를 하려면?',
    avatar_modal_quit_btn: '계정삭제',
    avatar_modal_limit_text: '1일 한도를 바꾸고 싶다면?',
    avatar_modal_limit_btn: '한도설정',

    // 로그인
    login_back: '돌아가기',
    login_title: '로그인',
    login_subtitle: '무료 플레이, 쉬운 시작 간편하게 친구들과 한판',
    login_id_placeholder: '포커룰루 아이디',
    login_pw_placeholder: '비밀번호',
    login_btn: '로그인',
    login_or: '또는',
    login_google: '구글 로그인',
    login_naver: '네이버 로그인',
    login_find_id: '아이디 찾기',
    login_reset_pw: '비밀번호 재설정',
    login_signup: '회원가입',

    // 회원가입
    signup_title: '회원가입',
    signup_subtitle: '포커룰루에 오신 것을 환영합니다',
    signup_email_placeholder: '이메일',
    signup_code_placeholder: '인증코드',
    signup_send_code: '코드보내기',
    signup_verify_code: '코드확인',
    signup_pw_placeholder: '비밀번호',
    signup_pw_confirm_placeholder: '비밀번호 확인',
    signup_btn: '다음',
    signup_has_account: '이미 계정이 있으신가요?',
    signup_go_login: '로그인',
    signup_subtitle_step2: '계정 정보를 입력하세요',
    signup_terms_all: '전체 동의',
    signup_terms_service: '[필수] 서비스 이용약관 동의',
    signup_terms_privacy: '[필수] 개인정보 수집 및 이용 동의',
    signup_terms_marketing: '[선택] 마케팅 정보 수신 동의',
    signup_next: '다음',
    signup_prev: '이전',
    signup_step1: '약관동의',
    signup_step2: '정보입력',
    signup_step3: '닉네임입력',
    signup_step4: '완료',
    signup_subtitle_step3: '닉네임과 아바타를 선택하세요',
    signup_nickname_placeholder: '닉네임',
    signup_avatar_label: '아바타 선택',
    signup_subtitle_step4: '가입이 완료되었습니다',
    signup_complete_title: '회원가입 성공!',
    signup_complete_desc: '포커룰루에 오신 것을 환영합니다',
    signup_go_mylulu: '마이 룰루',
    signup_go_home: '홈으로',

    // 게임 셋업
    gs_back: '돌아가기',
    gs_title: '사용자 게임',
    gs_desc: '나만의 룰로 방을 만들고, 친구를 초대하세요',
    gs_tab_general: '일반설정',
    gs_tab_blinds: '블라인드',
    gs_tab_prize: '상금',
    gs_tab_advanced: '고급설정',
    gs_label_title: '타이틀',
    gs_label_start_stack: '시작 스택',
    gs_label_rebuy: '리바이인',
    gs_label_table_type: '테이블 종류',
    gs_label_start_time: '시작 시간 (자동 시작)',
    gs_label_start_time_short: '시작 시간',
    gs_label_action_time: '액션 타임 (s)',
    dtp_today: '오늘',
    dtp_cancel: '취소',
    dtp_select: '선택',
    gs_label_level: 'Level',
    gs_label_blind_structure: '블라인드 스트럭처',
    gs_blind_hyper: '하이퍼',
    gs_blind_turbo: '터보',
    gs_blind_normal: '보통',
    gs_blind_slow: '느리게',
    gs_th_ante: 'ALL Ante',
    gs_th_time: 'Time',
    gs_blind_delete: '삭제',
    gs_blind_add: '블라인드',
    gs_blind_break: '브레이크',
    gs_label_total_buyin: '총 바이인',
    gs_label_prize_structure: '상금 구조',
    gs_prize_payout: '지급',
    gs_prize_custom: '커스텀',
    gs_label_itm: '인더머니',
    gs_label_guarantee: '개런티 상금',
    gs_label_timebank: '타임 뱅크',
    gs_label_initial_timebank: '초기 타임 뱅크',
    gs_label_extra_time: '추가 시간',
    gs_create_game: '게임 생성',

    // 푸터
    footer_terms: '이용약관',
    footer_privacy: '개인정보처리방침',
    footer_support: '고객센터',
    footer_contact: '문의하기',
  },

  en: {
    // Navigation
    nav_lobby: 'Lobby',
    nav_tournament: 'Tournament',
    nav_custom_game: 'Custom Game',
    nav_analytics: 'Stats',
    nav_shop: 'Shop',
    nav_my: 'MY LULU',
    nav_login: 'Login',
    nav_gold: '125B',

    // Banner subtitles
    banner1_sub: 'Thrilling all-night poker with friends',
    banner2_sub: 'Prove your skills in weekly tournaments',
    banner3_sub: 'Sign up now and get 10,000 free chips instantly!',
    banner4_sub: 'Invite friends and enjoy private rooms freely',
    banner5_sub: "Valentine's season exclusive rewards & special tables!",
    banner6_sub: 'Enjoy exclusive benefits with Diamond Membership',

    // Lobby sections
    lobby_game_modes: 'Game Modes',
    lobby_view_all: 'View All →',
    lobby_live_tables: 'Live Tables',
    lobby_more: 'More →',
    lobby_my_stats: 'My Stats Summary',
    lobby_detail: 'Details →',

    // Game modes
    game_tournament: 'Tournament',
    game_tournament_desc: 'Official competitive tournaments. Earn rewards based on your ranking.',
    game_tournament_players: '1,247 players competing',
    // Tournament page
    tk_title: 'Tickets',
    tk_desc: 'View your tickets',
    tk_summary_label: 'My Tickets',
    tk_expire: 'Expires',
    tk_days_left: ' days left',
    tnh_title: 'History',
    tnh_desc: 'View completed tournament records',
    tn_title: 'Tournament',
    tn_desc: 'Join tournaments and earn rewards',
    tn_tab_all: 'All',
    tn_tab_my: 'My Tournaments',
    tn_tab_history: 'History',
    tn_status_registering: 'Registering',
    tn_status_ongoing: 'Ongoing',
    tn_status_finished: 'Finished',
    tn_starts_in: 'Starts In',
    tn_manual_start: 'Manual Start',
    tn_fee_free: 'Free',
    tn_empty: 'No registered tournaments',
    tn_history_empty: 'No completed tournaments',
    game_custom: 'Custom Game',
    game_custom_desc: 'Create rooms with your own rules and invite friends.',
    game_custom_players: '856 rooms active',

    // Tables
    table_rookie: '🃏 Rookie Table',
    table_highroller: '♠️ High Roller',
    table_vip: '💎 VIP Lounge',
    table_blind: 'Blinds',
    table_players: 'Players',
    table_buyin: 'Buy-in',
    table_join: 'Join',

    // Stats
    stat_total_games: 'Total Games',
    stat_winrate: 'Win Rate',
    stat_total_profit: 'Total Profit',
    stat_best_streak: 'Best Streak',
    stat_wins: 'Wins',
    stat_losses: 'Losses',
    stat_chips: 'Tickets',
    stat_level: 'Level',

    // Analytics page
    analytics_title: 'My Stats',
    analytics_desc: 'Check your game records and performance at a glance',
    chart_weekly: '📈 Weekly Performance',
    chart_hand: '🃏 Hand Analysis',
    hand_best: 'Most Winning Hand',
    hand_worst: 'Most Losing Hand',
    day_mon: 'Mon', day_tue: 'Tue', day_wed: 'Wed', day_thu: 'Thu',
    day_fri: 'Fri', day_sat: 'Sat', day_sun: 'Sun',

    // Shop
    shop_title: 'Shop',
    shop_desc: 'Buy chips, items, and skins',
    shop_tab_recommend: '⭐ Featured',
    shop_tab_gems: '💎 Gems',
    shop_tab_avatar: '👤 Avatar',
    shop_tab_items: '🎁 Items',
    shop_buy: 'Buy Now',
    shop_avatar_title: 'Avatar Sets',
    shop_recommend_title: 'Starter Packages',
    pkg_a_name: 'Starter Package A', pkg_a_item1: 'Avatar A (15 days)', pkg_a_item2: '500M Gold',
    pkg_b_name: 'Starter Package B', pkg_b_item1: 'Avatar B (15 days)', pkg_b_item2: '1.5B Gold',
    pkg_c_name: 'Starter Package C', pkg_c_item1: 'Avatar C (15 days)', pkg_c_item2: '1B Buy-in Ticket', pkg_c_item3: '1.5B Gold',
    pkg_d_name: 'Starter Package D', pkg_d_item1: 'Avatar D (15 days)', pkg_d_item2: '2B Buy-in Ticket', pkg_d_item3: '3B Gold',
    pkg_e_name: 'Starter Package E', pkg_e_item1: 'Avatar E (15 days)', pkg_e_item2: '6B Buy-in Ticket', pkg_e_item3: '9B Gold',
    pkg_f_name: 'Starter Package F', pkg_f_item1: 'Avatar F (15 days)', pkg_f_item2: '10B Buy-in Ticket', pkg_f_item3: '15B Gold',

    // Gems tab
    shop_gem_title: 'Gems',
    gem_1_name: '10 Gems', gem_1_item1: '10 Gems',
    gem_2_name: '30 Gems', gem_2_item1: '30 Gems', gem_2_item2: '+2 Bonus Gems',
    gem_3_name: '50 Gems', gem_3_item1: '50 Gems', gem_3_item2: '+5 Bonus Gems',
    gem_4_name: '100 Gems', gem_4_item1: '100 Gems', gem_4_item2: '+15 Bonus Gems',
    gem_5_name: '300 Gems', gem_5_item1: '300 Gems', gem_5_item2: '+60 Bonus Gems', gem_5_item3: '500M Gold',
    gem_6_name: '500 Gems', gem_6_item1: '500 Gems', gem_6_item2: '+125 Bonus Gems', gem_6_item3: '1B Gold',
    gem_7_name: '1,000 Gems', gem_7_item1: '1,000 Gems', gem_7_item2: '+300 Bonus Gems', gem_7_item3: '3B Gold', gem_7_item4: '1B Buy-in Ticket',
    gem_8_name: '3,000 Gems', gem_8_item1: '3,000 Gems', gem_8_item2: '+1,000 Bonus Gems', gem_8_item3: '10B Gold', gem_8_item4: '3B Buy-in Ticket',
    gem_9_name: '5,000 Gems', gem_9_item1: '5,000 Gems', gem_9_item2: '+2,000 Bonus Gems', gem_9_item3: '20B Gold', gem_9_item4: '5B Buy-in Ticket', gem_9_item5: 'VIP Avatar (30 days)',

    // Avatar Sets tab
    avatar_g_name: 'Avatar Set G', avatar_g_item1: 'Avatar G (15 days)', avatar_g_item2: '10 Gems', avatar_g_item3: '500M Gold',
    avatar_h_name: 'Avatar Set H', avatar_h_item1: 'Avatar H (15 days)', avatar_h_item2: '30 Gems', avatar_h_item3: '1.5B Gold',
    avatar_i_name: 'Avatar Set I', avatar_i_item1: 'Avatar I (15 days)', avatar_i_item2: '50 Gems', avatar_i_item3: '2.5B Gold',
    avatar_j_name: 'Avatar Set J', avatar_j_item1: 'Avatar J (15 days)', avatar_j_item2: '100 Gems', avatar_j_item3: '5B Gold',
    avatar_k_name: 'Avatar Set K', avatar_k_item1: 'Avatar K (15 days)', avatar_k_item2: '300 Gems', avatar_k_item3: '15B Gold',
    avatar_l_name: 'Avatar Set L', avatar_l_item1: 'Avatar L (15 days)', avatar_l_item2: '500 Gems', avatar_l_item3: '25B Gold',
    avatar_m_name: 'Avatar Set M', avatar_m_item1: 'Avatar M (15 days)', avatar_m_item2: '1,000 Gems', avatar_m_item3: '50B Gold',
    avatar_n_name: 'Avatar Set N', avatar_n_item1: 'Avatar N (15 days)', avatar_n_item2: '3,000 Gems', avatar_n_item3: '150B Gold',

    // Items tab
    shop_table_skins: 'Table Skins',
    skin_classic_green: 'Classic Green',
    skin_classic_green_desc: 'Traditional poker table',
    skin_royal_red: 'Royal Red',
    skin_royal_red_desc: 'Premium red table',
    skin_cosmic_black: 'Cosmic Black',
    skin_cosmic_black_desc: 'Limited space-themed skin',
    shop_card_skins: 'Card Skins',
    skin_gold_card: 'Gold Card',
    skin_gold_card_desc: 'Luxury gold card back',
    skin_neon_card: 'Neon Card',
    skin_neon_card_desc: 'Glowing neon card design',
    skin_diamond_card: 'Diamond Card',
    skin_diamond_card_desc: 'VIP exclusive diamond design',
    shop_emotes: 'Emotes',
    emote_pokerface: 'Poker Face Pack',
    emote_pokerface_desc: '8 basic emotes',
    emote_drama: 'Drama Pack',
    emote_drama_desc: '12 dramatic emotes',
    emote_allin: 'All-In Pack',
    emote_allin_desc: '6 Season 3 limited emotes',

    // MY page
    my_title: 'MY LULU',
    my_desc: 'Manage your profile and game info',
    my_info_sub: 'Joined: 2025.01.15 · Level 23',
    my_profile: 'Edit Account',
    my_history: 'Transaction History',
    my_friends: 'Friends',
    my_items: 'My Items',
    my_settings: 'Settings',
    my_message: 'Mailbox',
    my_host: 'Host',
    my_tn_history: 'History',
    host_title: 'Host',
    host_desc: 'Manage your hosted tournaments',
    host_search_ph: 'Search by game title.',
    host_search_btn: 'Search',
    host_empty: 'No hosted tournaments',
    tx_title: 'Transaction History',
    tx_desc: 'View your gold and diamond transaction history',
    tx_tab_all: 'All',
    tx_tab_gold: 'Gold',
    tx_tab_diamond: 'Diamond',
    tx_empty: 'No transactions',
    tx_after: 'Balance',
    mb_title: 'Mailbox',
    mb_desc: 'Check your received mail',
    mb_btn_claim: 'Claim',
    mb_btn_done: 'Claimed',
    mb_empty: 'No mail',
    ae_title: 'Edit Account',
    ae_desc: 'You can change your password',
    ae_id_label: 'ID',
    ae_pw_title: 'Change Password',
    ae_current_pw: 'Current Password',
    ae_current_pw_ph: 'Enter current password',
    ae_new_pw: 'New Password',
    ae_new_pw_ph: 'Enter new password',
    ae_confirm_pw: 'Confirm New Password',
    ae_confirm_pw_ph: 'Re-enter new password',
    ae_pw_btn: 'Change Password',
    ae_pw_success: 'Password has been changed',
    ae_pw_mismatch: 'New passwords do not match',
    ae_pw_wrong: 'Current password is incorrect',
    ae_pw_empty: 'Please fill in all fields',
    avatar_modal_title: 'Select Avatar',
    avatar_modal_apply: 'Apply Avatar',
    nickname_modal_title: 'Edit Nickname',
    nickname_modal_save: 'Save',
    nickname_modal_error_empty: 'Please enter a nickname',
    nickname_modal_error_short: 'Nickname must be at least 2 characters',
    nickname_modal_error_duplicate: 'Nickname already in use',
    avatar_modal_quit_text: 'Want to quit the game?',
    avatar_modal_quit_btn: 'Delete Account',
    avatar_modal_limit_text: 'Want to change daily limit?',
    avatar_modal_limit_btn: 'Set Limit',

    // Login
    login_back: 'Go Back',
    login_title: 'Login',
    login_subtitle: 'Free to play, easy to start. Jump in with friends',
    login_id_placeholder: 'Poker Lulu ID',
    login_pw_placeholder: 'Password',
    login_btn: 'Login',
    login_or: 'or',
    login_google: 'Login with Google',
    login_naver: 'Login with Naver',
    login_find_id: 'Find ID',
    login_reset_pw: 'Reset Password',
    login_signup: 'Sign Up',

    // Signup
    signup_title: 'Sign Up',
    signup_subtitle: 'Welcome to Poker Lulu',
    signup_email_placeholder: 'Email',
    signup_code_placeholder: 'Verification Code',
    signup_send_code: 'Send Code',
    signup_verify_code: 'Verify',
    signup_pw_placeholder: 'Password',
    signup_pw_confirm_placeholder: 'Confirm Password',
    signup_btn: 'Next',
    signup_has_account: 'Already have an account?',
    signup_go_login: 'Login',
    signup_subtitle_step2: 'Enter your account details',
    signup_terms_all: 'Agree to All',
    signup_terms_service: '[Required] Terms of Service',
    signup_terms_privacy: '[Required] Privacy Policy',
    signup_terms_marketing: '[Optional] Marketing Communications',
    signup_next: 'Next',
    signup_prev: 'Previous',
    signup_step1: 'Terms',
    signup_step2: 'Account Info',
    signup_step3: 'Nickname',
    signup_step4: 'Done',
    signup_subtitle_step3: 'Choose your nickname and avatar',
    signup_nickname_placeholder: 'Nickname',
    signup_avatar_label: 'Select Avatar',
    signup_subtitle_step4: 'Registration complete',
    signup_complete_title: 'Sign Up Successful!',
    signup_complete_desc: 'Welcome to Poker Lulu',
    signup_go_mylulu: 'My Lulu',
    signup_go_home: 'Go Home',

    // Game Setup
    gs_back: 'Go Back',
    gs_title: 'Custom Game',
    gs_desc: 'Create your own room and invite friends',
    gs_tab_general: 'General',
    gs_tab_blinds: 'Blinds',
    gs_tab_prize: 'Prize',
    gs_tab_advanced: 'Advanced',
    gs_label_title: 'Title',
    gs_label_start_stack: 'Starting Stack',
    gs_label_rebuy: 'Re-buy',
    gs_label_table_type: 'Table Type',
    gs_label_start_time: 'Start Time (Auto Start)',
    gs_label_start_time_short: 'Start Time',
    gs_label_action_time: 'Action Time (s)',
    dtp_today: 'Today',
    dtp_cancel: 'Cancel',
    dtp_select: 'Select',
    gs_label_level: 'Level',
    gs_label_blind_structure: 'Blind Structure',
    gs_blind_hyper: 'Hyper',
    gs_blind_turbo: 'Turbo',
    gs_blind_normal: 'Normal',
    gs_blind_slow: 'Slow',
    gs_th_ante: 'ALL Ante',
    gs_th_time: 'Time',
    gs_blind_delete: 'Delete',
    gs_blind_add: 'Blind',
    gs_blind_break: 'Break',
    gs_label_total_buyin: 'Total Buy-in',
    gs_label_prize_structure: 'Prize Structure',
    gs_prize_payout: 'Payout',
    gs_prize_custom: 'Custom',
    gs_label_itm: 'In The Money',
    gs_label_guarantee: 'Guarantee Prize',
    gs_label_timebank: 'Time Bank',
    gs_label_initial_timebank: 'Initial Time Bank',
    gs_label_extra_time: 'Extra Time',
    gs_create_game: 'Create Game',

    // Footer
    footer_terms: 'Terms of Service',
    footer_privacy: 'Privacy Policy',
    footer_support: 'Support',
    footer_contact: 'Contact Us',
  },

  ja: {
    // ナビゲーション
    nav_lobby: 'ロビー',
    nav_tournament: 'トーナメント',
    nav_custom_game: 'カスタムゲーム',
    nav_analytics: '統計',
    nav_shop: 'ショップ',
    nav_my: 'MYルル',
    nav_login: 'ログイン',
    nav_gold: '1,250億',

    // バナーサブタイトル
    banner1_sub: '友達と一緒にスリリングなオールナイトポーカー',
    banner2_sub: '毎週開催のトーナメントで最高の実力を証明しよう',
    banner3_sub: '今すぐ登録で無料チップ10,000枚を即時支給！',
    banner4_sub: '友達を招待してプライベートルームを自由に楽しもう',
    banner5_sub: 'バレンタイン限定報酬＆特別テーブルオープン！',
    banner6_sub: 'ダイヤモンドメンバーシップで独占特典を満喫',

    // ロビーセクション
    lobby_game_modes: 'ゲームモード',
    lobby_view_all: 'すべて見る →',
    lobby_live_tables: 'ライブテーブル',
    lobby_more: 'もっと見る →',
    lobby_my_stats: 'マイ統計サマリー',
    lobby_detail: '詳しく →',

    // ゲームモード
    game_tournament: 'トーナメント',
    game_tournament_desc: '実力を競う公式トーナメント。順位に応じた報酬を獲得しよう。',
    game_tournament_players: '1,247人が参加中',
    // トーナメントページ
    tk_title: 'チケット',
    tk_desc: '保有チケットを確認',
    tk_summary_label: '保有チケット',
    tk_expire: '有効期限',
    tk_days_left: '日残り',
    tnh_title: 'ヒストリー',
    tnh_desc: '終了したトーナメント記録を確認',
    tn_title: 'トーナメント',
    tn_desc: 'トーナメントに参加して報酬を獲得しよう',
    tn_tab_all: 'すべて',
    tn_tab_my: 'マイトーナメント',
    tn_tab_history: '履歴',
    tn_status_registering: '登録中',
    tn_status_ongoing: '進行中',
    tn_status_finished: '終了',
    tn_starts_in: 'Starts In',
    tn_manual_start: '手動開始',
    tn_fee_free: '無料',
    tn_empty: '登録済みのトーナメントはありません',
    tn_history_empty: '完了したトーナメントはありません',
    game_custom: 'カスタムゲーム',
    game_custom_desc: '自分だけのルールで部屋を作り、友達を招待して楽しもう。',
    game_custom_players: '856部屋が稼働中',

    // テーブル
    table_rookie: '🃏 ルーキーテーブル',
    table_highroller: '♠️ ハイローラー',
    table_vip: '💎 VIPラウンジ',
    table_blind: 'ブラインド',
    table_players: 'プレイヤー',
    table_buyin: 'バイイン',
    table_join: '入場する',

    // 統計
    stat_total_games: '総ゲーム数',
    stat_winrate: '勝率',
    stat_total_profit: '総収益',
    stat_best_streak: '最高連勝',
    stat_wins: '勝利',
    stat_losses: '敗北',
    stat_chips: 'チケット',
    stat_level: 'レベル',

    // 統計ページ
    analytics_title: 'マイ統計',
    analytics_desc: 'ゲーム記録とパフォーマンスを一目で確認',
    chart_weekly: '📈 週間パフォーマンス',
    chart_hand: '🃏 ハンド分析',
    hand_best: '最多勝利ハンド',
    hand_worst: '最多敗北ハンド',
    day_mon: '月', day_tue: '火', day_wed: '水', day_thu: '木',
    day_fri: '金', day_sat: '土', day_sun: '日',

    // ショップ
    shop_title: 'ショップ',
    shop_desc: 'チップ、アイテム、スキンを購入しよう',
    shop_tab_recommend: '⭐ おすすめ',
    shop_tab_gems: '💎 ジェム',
    shop_tab_avatar: '👤 アバター',
    shop_tab_items: '🎁 アイテム',
    shop_buy: '購入する',
    shop_avatar_title: 'アバターセット',
    shop_recommend_title: 'スターターパッケージ',
    pkg_a_name: 'スターターパッケージ A', pkg_a_item1: 'アバター A (15日)', pkg_a_item2: '5億ゴールド',
    pkg_b_name: 'スターターパッケージ B', pkg_b_item1: 'アバター B (15日)', pkg_b_item2: '15億ゴールド',
    pkg_c_name: 'スターターパッケージ C', pkg_c_item1: 'アバター C (15日)', pkg_c_item2: 'バイインチケット 10億', pkg_c_item3: '15億ゴールド',
    pkg_d_name: 'スターターパッケージ D', pkg_d_item1: 'アバター D (15日)', pkg_d_item2: 'バイインチケット 20億', pkg_d_item3: '30億ゴールド',
    pkg_e_name: 'スターターパッケージ E', pkg_e_item1: 'アバター E (15日)', pkg_e_item2: 'バイインチケット 60億', pkg_e_item3: '90億ゴールド',
    pkg_f_name: 'スターターパッケージ F', pkg_f_item1: 'アバター F (15日)', pkg_f_item2: 'バイインチケット 100億', pkg_f_item3: '150億ゴールド',

    // ジェムタブ
    shop_gem_title: 'ジェム',
    gem_1_name: 'ジェム10個', gem_1_item1: 'ジェム10個',
    gem_2_name: 'ジェム30個', gem_2_item1: 'ジェム30個', gem_2_item2: 'ボーナスジェム +2個',
    gem_3_name: 'ジェム50個', gem_3_item1: 'ジェム50個', gem_3_item2: 'ボーナスジェム +5個',
    gem_4_name: 'ジェム100個', gem_4_item1: 'ジェム100個', gem_4_item2: 'ボーナスジェム +15個',
    gem_5_name: 'ジェム300個', gem_5_item1: 'ジェム300個', gem_5_item2: 'ボーナスジェム +60個', gem_5_item3: '5億ゴールド',
    gem_6_name: 'ジェム500個', gem_6_item1: 'ジェム500個', gem_6_item2: 'ボーナスジェム +125個', gem_6_item3: '10億ゴールド',
    gem_7_name: 'ジェム1,000個', gem_7_item1: 'ジェム1,000個', gem_7_item2: 'ボーナスジェム +300個', gem_7_item3: '30億ゴールド', gem_7_item4: 'バイインチケット 10億',
    gem_8_name: 'ジェム3,000個', gem_8_item1: 'ジェム3,000個', gem_8_item2: 'ボーナスジェム +1,000個', gem_8_item3: '100億ゴールド', gem_8_item4: 'バイインチケット 30億',
    gem_9_name: 'ジェム5,000個', gem_9_item1: 'ジェム5,000個', gem_9_item2: 'ボーナスジェム +2,000個', gem_9_item3: '200億ゴールド', gem_9_item4: 'バイインチケット 50億', gem_9_item5: 'VIPアバター (30日)',

    // アバターセットタブ
    avatar_g_name: 'アバターセット G', avatar_g_item1: 'アバター G (15日)', avatar_g_item2: 'ジェム10個', avatar_g_item3: '5億ゴールド',
    avatar_h_name: 'アバターセット H', avatar_h_item1: 'アバター H (15日)', avatar_h_item2: 'ジェム30個', avatar_h_item3: '15億ゴールド',
    avatar_i_name: 'アバターセット I', avatar_i_item1: 'アバター I (15日)', avatar_i_item2: 'ジェム50個', avatar_i_item3: '25億ゴールド',
    avatar_j_name: 'アバターセット J', avatar_j_item1: 'アバター J (15日)', avatar_j_item2: 'ジェム100個', avatar_j_item3: '50億ゴールド',
    avatar_k_name: 'アバターセット K', avatar_k_item1: 'アバター K (15日)', avatar_k_item2: 'ジェム300個', avatar_k_item3: '150億ゴールド',
    avatar_l_name: 'アバターセット L', avatar_l_item1: 'アバター L (15日)', avatar_l_item2: 'ジェム500個', avatar_l_item3: '250億ゴールド',
    avatar_m_name: 'アバターセット M', avatar_m_item1: 'アバター M (15日)', avatar_m_item2: 'ジェム1,000個', avatar_m_item3: '500億ゴールド',
    avatar_n_name: 'アバターセット N', avatar_n_item1: 'アバター N (15日)', avatar_n_item2: 'ジェム3,000個', avatar_n_item3: '1,500億ゴールド',

    // アイテムタブ
    shop_table_skins: 'テーブルスキン',
    skin_classic_green: 'クラシックグリーン',
    skin_classic_green_desc: '伝統的なポーカーテーブル',
    skin_royal_red: 'ロイヤルレッド',
    skin_royal_red_desc: 'プレミアムレッドテーブル',
    skin_cosmic_black: 'コズミックブラック',
    skin_cosmic_black_desc: '宇宙コンセプト限定スキン',
    shop_card_skins: 'カードスキン',
    skin_gold_card: 'ゴールドカード',
    skin_gold_card_desc: '高級ゴールドカード裏面',
    skin_neon_card: 'ネオンカード',
    skin_neon_card_desc: '光るネオンカードデザイン',
    skin_diamond_card: 'ダイヤモンドカード',
    skin_diamond_card_desc: 'VIP限定ダイヤモンドデザイン',
    shop_emotes: 'エモート',
    emote_pokerface: 'ポーカーフェイスパック',
    emote_pokerface_desc: '基本エモート8種',
    emote_drama: 'ドラマパック',
    emote_drama_desc: '演技派エモート12種',
    emote_allin: 'オールインパック',
    emote_allin_desc: 'シーズン3限定エモート6種',

    // MYページ
    my_title: 'MYルル',
    my_desc: 'プロフィールとゲーム情報を管理しよう',
    my_info_sub: '登録日: 2025.01.15 · レベル 23',
    my_profile: '会員情報修正',
    my_history: '取引履歴',
    my_friends: 'フレンド管理',
    my_items: 'マイアイテム',
    my_settings: '設定',
    my_message: '郵便箱',
    my_host: 'ホスト',
    my_tn_history: 'ヒストリー',
    host_title: 'ホスト',
    host_desc: '開設したトーナメントを管理しましょう',
    host_search_ph: 'ゲームタイトルを検索してください。',
    host_search_btn: '検索',
    host_empty: '開設したトーナメントがありません',
    tx_title: '取引履歴',
    tx_desc: 'ゴールドとダイヤの入出履歴を確認してください',
    tx_tab_all: '全体',
    tx_tab_gold: 'ゴールド',
    tx_tab_diamond: 'ダイヤ',
    tx_empty: '取引履歴がありません',
    tx_after: '残高',
    mb_title: '郵便箱',
    mb_desc: '届いた郵便を確認してください',
    mb_btn_claim: '受け取る',
    mb_btn_done: '受取済み',
    mb_empty: '郵便がありません',
    ae_title: '会員情報修正',
    ae_desc: 'パスワードを変更できます',
    ae_id_label: 'ID',
    ae_pw_title: 'パスワード変更',
    ae_current_pw: '現在のパスワード',
    ae_current_pw_ph: '現在のパスワードを入力',
    ae_new_pw: '新しいパスワード',
    ae_new_pw_ph: '新しいパスワードを入力',
    ae_confirm_pw: '新しいパスワード確認',
    ae_confirm_pw_ph: '新しいパスワードを再入力',
    ae_pw_btn: 'パスワード変更',
    ae_pw_success: 'パスワードが変更されました',
    ae_pw_mismatch: '新しいパスワードが一致しません',
    ae_pw_wrong: '現在のパスワードが正しくありません',
    ae_pw_empty: 'すべての項目を入力してください',
    avatar_modal_title: 'アバター選択',
    avatar_modal_apply: 'アバター着用',
    nickname_modal_title: 'ニックネーム変更',
    nickname_modal_save: '保存',
    nickname_modal_error_empty: 'ニックネームを入力してください',
    nickname_modal_error_short: 'ニックネームは2文字以上必要です',
    nickname_modal_error_duplicate: 'すでに使用されているニックネームです',
    avatar_modal_quit_text: 'ゲーム退会するには？',
    avatar_modal_quit_btn: 'アカウント削除',
    avatar_modal_limit_text: '1日限度を変えたい場合は？',
    avatar_modal_limit_btn: '限度設定',

    // ログイン
    login_back: '戻る',
    login_title: 'ログイン',
    login_subtitle: '無料プレイ、簡単スタート 友達と気軽に一局',
    login_id_placeholder: 'ポーカールルID',
    login_pw_placeholder: 'パスワード',
    login_btn: 'ログイン',
    login_or: 'または',
    login_google: 'Google ログイン',
    login_naver: 'Naver ログイン',
    login_find_id: 'ID検索',
    login_reset_pw: 'パスワード再設定',
    login_signup: '新規登録',

    // 新規登録
    signup_title: '新規登録',
    signup_subtitle: 'ポーカールルへようこそ',
    signup_email_placeholder: 'メールアドレス',
    signup_code_placeholder: '認証コード',
    signup_send_code: 'コード送信',
    signup_verify_code: '確認',
    signup_pw_placeholder: 'パスワード',
    signup_pw_confirm_placeholder: 'パスワード確認',
    signup_btn: '次へ',
    signup_has_account: 'すでにアカウントをお持ちですか？',
    signup_go_login: 'ログイン',
    signup_subtitle_step2: 'アカウント情報を入力してください',
    signup_terms_all: 'すべてに同意',
    signup_terms_service: '[必須] サービス利用規約の同意',
    signup_terms_privacy: '[必須] 個人情報の収集及び利用の同意',
    signup_terms_marketing: '[任意] マーケティング情報の受信同意',
    signup_next: '次へ',
    signup_prev: '前へ',
    signup_step1: '約款同意',
    signup_step2: '情報入力',
    signup_step3: 'ニックネーム',
    signup_step4: '完了',
    signup_subtitle_step3: 'ニックネームとアバターを選択してください',
    signup_nickname_placeholder: 'ニックネーム',
    signup_avatar_label: 'アバター選択',
    signup_subtitle_step4: '登録が完了しました',
    signup_complete_title: '会員登録成功！',
    signup_complete_desc: 'ポーカールルへようこそ',
    signup_go_mylulu: 'マイルル',
    signup_go_home: 'ホームへ',

    // ゲーム設定
    gs_back: '戻る',
    gs_title: 'カスタムゲーム',
    gs_desc: '自分だけのルールで部屋を作り、友達を招待しましょう',
    gs_tab_general: '一般設定',
    gs_tab_blinds: 'ブラインド',
    gs_tab_prize: '賞金',
    gs_tab_advanced: '詳細設定',
    gs_label_title: 'タイトル',
    gs_label_start_stack: 'スタートスタック',
    gs_label_rebuy: 'リバイイン',
    gs_label_table_type: 'テーブルタイプ',
    gs_label_start_time: '開始時間 (自動開始)',
    gs_label_start_time_short: '開始時間',
    gs_label_action_time: 'アクションタイム (s)',
    dtp_today: '今日',
    dtp_cancel: 'キャンセル',
    dtp_select: '選択',
    gs_label_level: 'Level',
    gs_label_blind_structure: 'ブラインドストラクチャー',
    gs_blind_hyper: 'ハイパー',
    gs_blind_turbo: 'ターボ',
    gs_blind_normal: '通常',
    gs_blind_slow: 'スロー',
    gs_th_ante: 'ALL Ante',
    gs_th_time: 'Time',
    gs_blind_delete: '削除',
    gs_blind_add: 'ブラインド',
    gs_blind_break: 'ブレイク',
    gs_label_total_buyin: '合計バイイン',
    gs_label_prize_structure: '賞金構造',
    gs_prize_payout: '支払い',
    gs_prize_custom: 'カスタム',
    gs_label_itm: 'インザマネー',
    gs_label_guarantee: '保証賞金',
    gs_label_timebank: 'タイムバンク',
    gs_label_initial_timebank: '初期タイムバンク',
    gs_label_extra_time: '追加時間',
    gs_create_game: 'ゲーム作成',

    // フッター
    footer_terms: '利用規約',
    footer_privacy: 'プライバシーポリシー',
    footer_support: 'サポート',
    footer_contact: 'お問い合わせ',
  }
};

let currentLang = 'ko';

function changeLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  if (!dict) return;

  // data-i18n 속성이 있는 모든 요소의 텍스트를 교체
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('<br>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // data-i18n-placeholder 속성이 있는 input 요소의 placeholder를 교체
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;

  // 페이지 타이틀 업데이트
  const titles = {
    ko: 'POKER LULU - 친구와 함께하는 포커',
    en: 'POKER LULU - Play Poker with Friends',
    ja: 'POKER LULU - 友達とポーカーを楽しもう'
  };
  document.title = titles[lang] || titles.en;
}

// === 페이지 전환 ===
function switchPage(p) {
  if (p === 'my' && !getSession()) { p = 'login'; }
  if (p === 'login') { showLogin(); }
  document.querySelectorAll('.page-container').forEach(e => e.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(e => e.classList.remove('active'));
  const navLink = document.querySelector('.nav-link[data-page="' + p + '"]');
  if (navLink) navLink.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (p === 'game-setup') { gsInitDefaults(); }
  if (p === 'tournament') { tnRenderList(); switchTournamentTab('all'); }
  if (p === 'tn-history') { tnRenderHistory(); }
  if (p === 'ticket') { tkRenderList(); }
  if (p === 'account-edit') { aeInit(); }
  if (p === 'mailbox') { mbRenderList(); }
  if (p === 'host') { hostRenderList(); }
  if (p === 'transaction') { txRenderList(); }
}

// === 인증 시스템 ===
function getUsers() {
  return JSON.parse(localStorage.getItem('lulu_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('lulu_users', JSON.stringify(users));
}
function getSession() {
  return JSON.parse(localStorage.getItem('lulu_session') || 'null');
}
function saveSession(user) {
  localStorage.setItem('lulu_session', JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem('lulu_session');
}

function hideAllAuthSections() {
  ['loginSection','signupStep1','signupStep2','signupStep3','signupStep4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}
function showLogin() {
  hideAllAuthSections();
  const loginSec = document.getElementById('loginSection');
  if (loginSec) loginSec.style.display = '';
  clearLoginErrors();
}
function showSignup() {
  hideAllAuthSections();
  document.getElementById('signupStep1').style.display = '';
  clearLoginErrors();
}
function showSignupStep1() {
  hideAllAuthSections();
  document.getElementById('signupStep1').style.display = '';
}
function showSignupStep2() {
  hideAllAuthSections();
  document.getElementById('signupStep2').style.display = '';
  // 인증 상태 초기화
  signupVerificationCode = null;
  signupEmailVerified = false;
  const codeInput = document.getElementById('signupCode');
  if (codeInput) { codeInput.disabled = true; codeInput.value = ''; }
  const verifyBtn = document.getElementById('verifyCodeBtn');
  if (verifyBtn) { verifyBtn.disabled = true; verifyBtn.classList.add('disabled'); }
  const sendBtn = document.getElementById('sendCodeBtn');
  if (sendBtn) { sendBtn.disabled = false; sendBtn.classList.remove('disabled'); }
  const emailInput = document.getElementById('signupEmail');
  if (emailInput) { emailInput.disabled = false; }
  clearLoginErrors();
}
function toggleAllTerms() {
  const allCheck = document.getElementById('termAll');
  const checks = document.querySelectorAll('.signup-terms input[type="checkbox"]');
  checks.forEach(c => c.checked = allCheck.checked);
  updateTermsBtn();
}
function updateTermsBtn() {
  const required = document.querySelectorAll('.term-required');
  const allChecked = Array.from(required).every(c => c.checked);
  const btn = document.getElementById('signupNextBtn');
  if (allChecked) { btn.classList.remove('disabled'); } else { btn.classList.add('disabled'); }
  // 전체 동의 체크박스 동기화
  const allInputs = document.querySelectorAll('.signup-terms input[type="checkbox"]:not(#termAll)');
  document.getElementById('termAll').checked = Array.from(allInputs).every(c => c.checked);
}
function clearLoginErrors() {
  const le = document.getElementById('loginError');
  const se = document.getElementById('signupError');
  if (le) { le.style.display = 'none'; le.textContent = ''; }
  if (se) { se.style.display = 'none'; se.textContent = ''; }
}
function showError(elId, msg) {
  const el = document.getElementById(elId);
  el.textContent = msg;
  el.style.display = 'block';
}

function handleLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pw = document.getElementById('loginPw').value;
  if (!id || !pw) { showError('loginError', '아이디와 비밀번호를 입력하세요'); return; }
  const users = getUsers();
  const user = users.find(u => u.id === id);
  if (!user || user.password !== pw) { showError('loginError', '아이디 또는 비밀번호가 일치하지 않습니다'); return; }
  saveSession({ id: user.id, nickname: user.nickname, email: user.email || '', joinDate: user.joinDate });
  document.getElementById('loginId').value = '';
  document.getElementById('loginPw').value = '';
  clearLoginErrors();
  updateAuthUI();
  updateMyPage();
  switchPage('my');
}

// 이메일 인증 상태
let signupVerificationCode = null;
let signupEmailVerified = false;

function handleSendCode() {
  const email = document.getElementById('signupEmail').value.trim();
  if (!email) { showError('signupError', '이메일을 입력하세요'); return; }
  // 6자리 랜덤 코드 생성 (localStorage 데모용)
  signupVerificationCode = String(Math.floor(100000 + Math.random() * 900000));
  signupEmailVerified = false;
  // 코드 입력 활성화
  const codeInput = document.getElementById('signupCode');
  codeInput.disabled = false;
  codeInput.value = '';
  codeInput.focus();
  // 코드확인 버튼은 아직 비활성
  const verifyBtn = document.getElementById('verifyCodeBtn');
  verifyBtn.disabled = true;
  verifyBtn.classList.add('disabled');
  // 보내기 버튼 텍스트 변경
  const sendBtn = document.getElementById('sendCodeBtn');
  sendBtn.textContent = '재전송';
  // 데모: 알림으로 코드 표시 (실제 서비스에서는 이메일 발송)
  alert('인증코드: ' + signupVerificationCode + '\n(데모용 - 실제로는 이메일로 전송됩니다)');
  clearLoginErrors();
}

function updateVerifyBtn() {
  const code = document.getElementById('signupCode').value.trim();
  const verifyBtn = document.getElementById('verifyCodeBtn');
  if (code.length >= 6) {
    verifyBtn.disabled = false;
    verifyBtn.classList.remove('disabled');
  } else {
    verifyBtn.disabled = true;
    verifyBtn.classList.add('disabled');
  }
}

function handleVerifyCode() {
  const code = document.getElementById('signupCode').value.trim();
  if (code === signupVerificationCode) {
    signupEmailVerified = true;
    document.getElementById('signupCode').disabled = true;
    document.getElementById('verifyCodeBtn').disabled = true;
    document.getElementById('verifyCodeBtn').classList.add('disabled');
    document.getElementById('sendCodeBtn').disabled = true;
    document.getElementById('sendCodeBtn').classList.add('disabled');
    document.getElementById('signupEmail').disabled = true;
    showError('signupError', '✓ 이메일 인증 완료');
    document.getElementById('signupError').style.color = '#22c55e';
    document.getElementById('signupError').style.display = '';
  } else {
    showError('signupError', '인증코드가 일치하지 않습니다');
  }
}

// Step2 → Step3 이동 (정보입력 검증 후 닉네임 입력으로)
function handleSignup() {
  const email = document.getElementById('signupEmail').value.trim();
  const pw = document.getElementById('signupPw').value;
  const pwConfirm = document.getElementById('signupPwConfirm').value;
  if (!email || !pw) { showError('signupError', '모든 항목을 입력하세요'); return; }
  if (!signupEmailVerified) { showError('signupError', '이메일 인증을 완료하세요'); return; }
  if (pw.length < 4) { showError('signupError', '비밀번호는 4자 이상이어야 합니다'); return; }
  if (pw !== pwConfirm) { showError('signupError', '비밀번호가 일치하지 않습니다'); return; }
  const users = getUsers();
  if (users.find(u => u.email === email)) { showError('signupError', '이미 사용 중인 이메일입니다'); return; }
  // Step3로 이동
  showSignupStep3();
}

// Step3 표시
function showSignupStep3() {
  hideAllAuthSections();
  document.getElementById('signupStep3').style.display = '';
  clearLoginErrors();
}

// Step3 아바타 선택
let signupSelectedAvatar = 'avatar_o.png';
function selectSignupAvatar(el) {
  document.querySelectorAll('.signup-avatar-item').forEach(item => item.classList.remove('selected'));
  el.classList.add('selected');
  signupSelectedAvatar = el.getAttribute('data-avatar');
}

// Step3 → 가입 완료
function handleSignupStep3() {
  const nickname = document.getElementById('signupNickname').value.trim();
  if (!nickname) { showError('signupStep3Error', '닉네임을 입력하세요'); return; }
  if (nickname.length < 2) { showError('signupStep3Error', '닉네임은 2자 이상이어야 합니다'); return; }
  const users = getUsers();
  if (users.find(u => u.nickname === nickname)) { showError('signupStep3Error', '이미 사용 중인 닉네임입니다'); return; }
  const email = document.getElementById('signupEmail').value.trim();
  const pw = document.getElementById('signupPw').value;
  const today = new Date();
  const joinDate = today.getFullYear() + '.' + String(today.getMonth()+1).padStart(2,'0') + '.' + String(today.getDate()).padStart(2,'0');
  const newUser = { id: email, password: pw, nickname, email, avatar: signupSelectedAvatar, joinDate };
  users.push(newUser);
  saveUsers(users);
  saveSession({ id: newUser.id, nickname: newUser.nickname, email: newUser.email, avatar: newUser.avatar, joinDate: newUser.joinDate });
  // 폼 초기화
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupCode').value = '';
  document.getElementById('signupPw').value = '';
  document.getElementById('signupPwConfirm').value = '';
  document.getElementById('signupNickname').value = '';
  signupVerificationCode = null;
  signupEmailVerified = false;
  signupSelectedAvatar = 'avatar_o.png';
  clearLoginErrors();
  updateAuthUI();
  updateMyPage();
  // Step4 완료 화면으로 이동
  showSignupStep4();
}

function showSignupStep4() {
  hideAllAuthSections();
  document.getElementById('signupStep4').style.display = '';
}

function handleLogout() {
  clearSession();
  updateAuthUI();
  switchPage('lobby');
}

function updateAuthUI() {
  const session = getSession();
  const loginBtn = document.getElementById('navLoginBtn');
  const logoutBtn = document.getElementById('navLogoutBtn');
  const goldEl = document.getElementById('navGold');
  const diamondEl = document.getElementById('navDiamond');
  if (session) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = '';
    if (goldEl) goldEl.textContent = session.gold || '1,250억';
    if (diamondEl) diamondEl.textContent = session.diamond || '300';
  } else {
    if (loginBtn) loginBtn.style.display = '';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (goldEl) goldEl.textContent = '0';
    if (diamondEl) diamondEl.textContent = '0';
  }
}

function updateMyPage() {
  const session = getSession();
  if (!session) return;
  const nicknameEl = document.getElementById('myNickname');
  const emailEl = document.getElementById('myEmail');
  const joinEl = document.getElementById('myJoinInfo');
  if (nicknameEl) nicknameEl.textContent = session.nickname;
  if (emailEl) emailEl.textContent = session.email || session.id;
  if (joinEl) joinEl.textContent = '가입일: ' + session.joinDate + ' · 레벨 1';
}

// 페이지 로드 시 인증 상태 확인
(function checkAuth() {
  updateAuthUI();
  const session = getSession();
  if (session) updateMyPage();
})();

// === CAROUSEL ===
const TOTAL_SLIDES = 6;
let currentSlide = 0;
let autoTimer;

const slides = document.querySelectorAll('.banner-slide');
const dotsContainer = document.getElementById('bannerDots');

for (let i = 0; i < TOTAL_SLIDES; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goSlide(i);
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll('.dot');

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = ((n % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetAutoPlay();
}

function nextSlide() {
  goSlide(currentSlide + 1);
}

function prevSlide() {
  goSlide(currentSlide - 1);
}

function resetAutoPlay() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goSlide(currentSlide + 1), 5000);
}

resetAutoPlay();

// === SHOP TABS ===
function switchShopTab(tab) {
  document.querySelectorAll('.shop-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.shop-tab-content').forEach(e => e.classList.remove('active'));
  document.querySelector('.shop-tab[data-shop-tab="' + tab + '"]').classList.add('active');
  document.getElementById('shop-' + tab).classList.add('active');
}

// === AVATAR MODAL ===
let selectedAvatarSrc = 'images/avatar_o.png';

function openAvatarModal() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.getElementById('avatarModal').classList.add('active');
}

function closeAvatarModal() {
  document.getElementById('avatarModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function selectAvatar(el) {
  document.querySelectorAll('.modal-avatar-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  const src = 'images/' + el.dataset.avatar;
  selectedAvatarSrc = src;
  document.getElementById('modalPreviewAvatar').querySelector('img').src = src;
}

function applyAvatar() {
  document.querySelector('.my-avatar img').src = selectedAvatarSrc;
  closeAvatarModal();
}

// === NICKNAME EDIT MODAL ===
function openNicknameModal() {
  const session = getSession();
  if (!session) return;
  const input = document.getElementById('nicknameModalInput');
  input.value = session.nickname || '';
  document.getElementById('nicknameModalError').style.display = 'none';
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.getElementById('nicknameModal').classList.add('active');
  setTimeout(() => input.focus(), 100);
}

function closeNicknameModal() {
  document.getElementById('nicknameModal').classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function saveNickname() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const input = document.getElementById('nicknameModalInput');
  const errorEl = document.getElementById('nicknameModalError');
  const nickname = input.value.trim();

  if (!nickname) {
    errorEl.textContent = t.nickname_modal_error_empty || '닉네임을 입력하세요';
    errorEl.style.display = '';
    return;
  }
  if (nickname.length < 2) {
    errorEl.textContent = t.nickname_modal_error_short || '닉네임은 2자 이상이어야 합니다';
    errorEl.style.display = '';
    return;
  }

  const session = getSession();
  if (nickname === session.nickname) { closeNicknameModal(); return; }

  const users = getUsers();
  if (users.find(u => u.nickname === nickname && u.email !== session.email)) {
    errorEl.textContent = t.nickname_modal_error_duplicate || '이미 사용 중인 닉네임입니다';
    errorEl.style.display = '';
    return;
  }

  // 유저 목록 업데이트
  const idx = users.findIndex(u => u.email === session.email);
  if (idx !== -1) { users[idx].nickname = nickname; saveUsers(users); }

  // 세션 업데이트
  session.nickname = nickname;
  saveSession(session);

  // MY 페이지 반영
  document.getElementById('myNickname').textContent = nickname;
  closeNicknameModal();
}

// 오버레이 클릭으로 닫기
document.getElementById('avatarModal').addEventListener('click', function(e) {
  if (e.target === this) closeAvatarModal();
});
document.getElementById('nicknameModal').addEventListener('click', function(e) {
  if (e.target === this) closeNicknameModal();
});
document.getElementById('dtpModal').addEventListener('click', function(e) {
  if (e.target === this) dtpClose();
});

// === TOURNAMENT ===
const demoTournaments = [
  { id:1,  name:'POKER LULU Weekly Championship', status:'registering', startType:'manual', fee:'free', players:3, maxPlayers:10, prize:'500,000G', registered:true },
  { id:2,  name:'Friday Night Holdem', status:'registering', startType:'manual', fee:'free', players:1, maxPlayers:6, prize:'-', registered:false },
  { id:3,  name:'POKER LULU User Custom Game', status:'registering', startType:'manual', fee:'free', players:0, maxPlayers:8, prize:'-', registered:false },
  { id:4,  name:'High Roller Tournament', status:'ongoing', startType:'2025-02-24 20:00', fee:'10,000G', players:8, maxPlayers:10, prize:'1,000,000G', registered:true },
  { id:5,  name:'Beginner Friendly Open', status:'registering', startType:'manual', fee:'free', players:5, maxPlayers:12, prize:'100,000G', registered:false },
  { id:6,  name:'POKER LULU Daily Freeroll', status:'registering', startType:'2025-02-25 12:00', fee:'free', players:12, maxPlayers:50, prize:'200,000G', registered:true },
  { id:7,  name:'VIP Invitational', status:'ongoing', startType:'2025-02-24 19:00', fee:'50,000G', players:6, maxPlayers:6, prize:'5,000,000G', registered:false },
  { id:8,  name:'POKER LULU User Custom Game', status:'registering', startType:'manual', fee:'free', players:2, maxPlayers:6, prize:'-', registered:false },
  { id:9,  name:'Sunday Special MTT', status:'finished', startType:'2025-02-23 18:00', fee:'5,000G', players:20, maxPlayers:20, prize:'2,000,000G', registered:true },
  { id:10, name:'Turbo Knockout Bounty', status:'registering', startType:'2025-02-26 21:00', fee:'20,000G', players:0, maxPlayers:16, prize:'3,000,000G', registered:false },
  { id:11, name:'Saturday Night Showdown', status:'finished', startType:'2025-02-22 20:00', fee:'10,000G', players:16, maxPlayers:16, prize:'1,500,000G', registered:true },
  { id:12, name:'POKER LULU Grand Prix #3', status:'finished', startType:'2025-02-20 19:00', fee:'25,000G', players:32, maxPlayers:32, prize:'8,000,000G', registered:false },
  { id:13, name:'Mini Freeroll Championship', status:'finished', startType:'2025-02-19 12:00', fee:'free', players:50, maxPlayers:50, prize:'500,000G', registered:true },
  { id:14, name:'High Stakes Deep Stack', status:'finished', startType:'2025-02-18 21:00', fee:'50,000G', players:10, maxPlayers:10, prize:'5,000,000G', registered:false },
  { id:15, name:'Weekday Express Turbo', status:'finished', startType:'2025-02-17 18:00', fee:'3,000G', players:24, maxPlayers:24, prize:'600,000G', registered:true },
  { id:16, name:'POKER LULU Monthly Final', status:'finished', startType:'2025-02-15 19:00', fee:'100,000G', players:64, maxPlayers:64, prize:'20,000,000G', registered:false },
];

function switchTournamentTab(tab) {
  document.querySelectorAll('.tn-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.tn-tab-content').forEach(e => e.classList.remove('active'));
  document.querySelector('.tn-tab[data-tn-tab="' + tab + '"]').classList.add('active');
  document.getElementById('tn-' + tab).classList.add('active');
}

function tnRenderList() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;

  const statusMap = {
    registering: { label: t.tn_status_registering || '등록중', cls: 'registering' },
    ongoing:     { label: t.tn_status_ongoing || '진행중', cls: 'ongoing' },
    finished:    { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const feeLabel = t.tn_fee_free || '무료';
  const startsLabel = t.tn_starts_in || 'Starts In';
  const manualLabel = t.tn_manual_start || '수동 시작';

  function buildCard(item) {
    const s = statusMap[item.status] || statusMap.registering;
    const fee = item.fee === 'free' ? feeLabel : item.fee;
    const startVal = item.startType === 'manual' ? manualLabel : item.startType;
    return `<div class="tn-card">
      <div class="tn-card-left">
        <span class="tn-badge ${s.cls}">${s.label}</span>
        <span class="tn-starts-label">${startsLabel}</span>
        <span class="tn-starts-value">${startVal}</span>
      </div>
      <div class="tn-card-right">
        <div class="tn-name">${item.name}</div>
        <div class="tn-meta">
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
          <span class="tn-meta-item">${fee}</span>
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${item.players}/${item.maxPlayers}</span>
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> ${item.prize}</span>
        </div>
      </div>
    </div>`;
  }

  // 전체 리스트
  const allHtml = demoTournaments.map(buildCard).join('');
  document.getElementById('tnAllList').innerHTML = allHtml;

  // 내 토너먼트 리스트
  const myItems = demoTournaments.filter(item => item.registered);
  const emptyMsg = t.tn_empty || '등록된 토너먼트가 없습니다';
  const myHtml = myItems.length ? myItems.map(buildCard).join('') : `<div class="tn-empty">${emptyMsg}</div>`;
  document.getElementById('tnMyList').innerHTML = myHtml;
}

// === TOURNAMENT HISTORY PAGE ===

function tnRenderHistory() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;

  const statusMap = {
    finished: { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const feeLabel = t.tn_fee_free || '무료';
  const startsLabel = t.tn_starts_in || 'Starts In';
  const manualLabel = t.tn_manual_start || '수동 시작';

  function buildCard(item) {
    const s = statusMap[item.status] || { label: '종료', cls: 'finished' };
    const fee = item.fee === 'free' ? feeLabel : item.fee;
    const startVal = item.startType === 'manual' ? manualLabel : item.startType;
    return `<div class="tn-card">
      <div class="tn-card-left">
        <span class="tn-badge ${s.cls}">${s.label}</span>
        <span class="tn-starts-label">${startsLabel}</span>
        <span class="tn-starts-value">${startVal}</span>
      </div>
      <div class="tn-card-right">
        <div class="tn-name">${item.name}</div>
        <div class="tn-meta">
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>
          <span class="tn-meta-item">${fee}</span>
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${item.players}/${item.maxPlayers}</span>
          <span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> ${item.prize}</span>
        </div>
      </div>
    </div>`;
  }

  const historyItems = demoTournaments.filter(item => item.status === 'finished');
  const emptyMsg = t.tn_history_empty || '완료된 토너먼트가 없습니다';
  const html = historyItems.length ? historyItems.map(buildCard).join('') : `<div class="tn-empty">${emptyMsg}</div>`;
  document.getElementById('tnHistoryList').innerHTML = html;
}

// === TICKET PAGE ===

const demoTickets = [
  { id: 1,  series: 'Series A',    expire: '2026-03-02' },
  { id: 2,  series: 'Series A',    expire: '2026-03-05' },
  { id: 3,  series: 'Series B',    expire: '2026-03-10' },
  { id: 4,  series: 'Series B',    expire: '2026-03-12' },
  { id: 5,  series: 'Series C',    expire: '2026-03-18' },
  { id: 6,  series: 'Series C',    expire: '2026-03-20' },
  { id: 7,  series: 'Series D',    expire: '2026-03-25' },
  { id: 8,  series: 'Series D',    expire: '2026-03-27' },
  { id: 9,  series: 'Satellite A', expire: '2026-03-03' },
  { id: 10, series: 'Satellite A', expire: '2026-03-08' },
  { id: 11, series: 'Satellite B', expire: '2026-03-14' },
  { id: 12, series: 'Satellite B', expire: '2026-03-16' },
  { id: 13, series: 'Satellite C', expire: '2026-03-22' },
  { id: 14, series: 'Satellite C', expire: '2026-03-24' },
  { id: 15, series: 'Satellite D', expire: '2026-03-26' },
  { id: 16, series: 'Satellite D', expire: '2026-03-28' },
  { id: 17, series: 'Series A',    expire: '2026-03-07' },
  { id: 18, series: 'Satellite A', expire: '2026-03-11' },
  { id: 19, series: 'Series B',    expire: '2026-03-15' },
  { id: 20, series: 'Satellite B', expire: '2026-03-19' },
  { id: 21, series: 'Series C',    expire: '2026-03-21' },
  { id: 22, series: 'Satellite C', expire: '2026-03-23' },
  { id: 23, series: 'Series D',    expire: '2026-03-26' },
  { id: 24, series: 'Satellite D', expire: '2026-03-27' },
  { id: 25, series: 'Series A',    expire: '2026-03-04' },
];

function tkRenderList() {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const expireLabel = t.tk_expire || '만료일';
  const dayLabel = t.tk_days_left || '일 남음';
  const today = new Date();
  today.setHours(0,0,0,0);

  const totalPrefix = lang === 'ko' ? '총 ' : lang === 'ja' ? '合計 ' : '';
  const totalSuffix = lang === 'ko' ? '장' : lang === 'ja' ? '枚' : ' total';
  document.getElementById('tkTicketCount').textContent = totalPrefix + demoTickets.length + totalSuffix;

  const html = demoTickets.map(tk => {
    const expDate = new Date(tk.expire);
    const diff = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));
    const daysLeft = diff > 0 ? diff : 0;
    return `<div class="tk-item">
      <span class="tk-item-icon">🎫</span>
      <div class="tk-item-info">
        <span class="tk-item-name">${tk.series}</span>
        <span class="tk-item-expire">${expireLabel}: ${tk.expire} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="vertical-align:-1px;margin-left:6px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${daysLeft}${dayLabel}</span>
      </div>
      <span class="tk-item-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></span>
    </div>`;
  }).join('');

  document.getElementById('tkTicketList').innerHTML = html;
}

// === GAME SETUP ===

function switchGameSetupTab(tab) {
  document.querySelectorAll('.gs-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.gs-tab-content').forEach(e => e.classList.remove('active'));
  document.querySelector('.gs-tab[data-gs-tab="' + tab + '"]').classList.add('active');
  document.getElementById('gs-' + tab).classList.add('active');
}

function gsStep(id, delta) {
  const el = document.getElementById(id);
  let val = parseInt(el.textContent, 10) || 0;
  val = Math.max(0, val + delta);
  el.textContent = val;
}

function gsSelectSegment(groupId, btn) {
  const group = document.getElementById(groupId);
  group.querySelectorAll('.gs-segment-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Blind Table
const defaultBlindLevels = [
  { lv:1, sb:10, bb:20, ante:0, time:10 },
  { lv:2, sb:15, bb:30, ante:0, time:10 },
  { lv:3, sb:20, bb:40, ante:5, time:10 },
  { lv:4, sb:30, bb:60, ante:10, time:10 },
  { lv:5, sb:50, bb:100, ante:15, time:10 },
  { lv:6, sb:75, bb:150, ante:20, time:10 },
  { lv:7, sb:100, bb:200, ante:25, time:10 },
  { lv:8, sb:150, bb:300, ante:40, time:10 },
  { lv:9, sb:200, bb:400, ante:50, time:10 },
  { lv:10, sb:300, bb:600, ante:75, time:10 },
];
let gsBlindData = JSON.parse(JSON.stringify(defaultBlindLevels));
let gsSelectedRow = -1;

function gsRenderBlindTable() {
  const tbody = document.getElementById('gsBlindTableBody');
  tbody.innerHTML = '';
  gsBlindData.forEach((row, idx) => {
    const tr = document.createElement('tr');
    if (row.isBreak) {
      tr.className = 'break-row';
      tr.innerHTML = '<td>-</td><td colspan="2" style="font-style:italic;color:var(--text-muted)">BREAK</td><td><input type="number" value="' + row.time + '" onchange="gsUpdateBlind(' + idx + ',\'time\',this.value)" onclick="event.stopPropagation()"></td>';
    } else {
      tr.innerHTML = '<td>' + row.lv + '</td><td><div class="gs-sb-bb"><input type="number" value="' + row.sb + '" onchange="gsUpdateBlind(' + idx + ',\'sb\',this.value)" onclick="event.stopPropagation()"> / <input type="number" value="' + row.bb + '" onchange="gsUpdateBlind(' + idx + ',\'bb\',this.value)" onclick="event.stopPropagation()"></div></td><td><input type="number" value="' + row.ante + '" onchange="gsUpdateBlind(' + idx + ',\'ante\',this.value)" onclick="event.stopPropagation()"></td><td><input type="number" value="' + row.time + '" onchange="gsUpdateBlind(' + idx + ',\'time\',this.value)" onclick="event.stopPropagation()"></td>';
    }
    if (idx === gsSelectedRow) tr.classList.add('selected');
    tr.addEventListener('click', function(e) {
      if (e.target.tagName === 'INPUT') return;
      gsSelectBlindRow(idx);
    });
    tbody.appendChild(tr);
  });
}

function gsSelectBlindRow(idx) {
  gsSelectedRow = gsSelectedRow === idx ? -1 : idx;
  document.getElementById('gsBlindActions').style.display = gsSelectedRow >= 0 ? 'flex' : 'none';
  gsRenderBlindTable();
}

function gsUpdateBlind(idx, field, value) {
  gsBlindData[idx][field] = parseInt(value, 10) || 0;
}

function gsRenumberLevels() {
  let lvNum = 1;
  gsBlindData.forEach(row => { if (!row.isBreak) row.lv = lvNum++; });
}

function gsDeleteBlindRow() {
  if (gsSelectedRow < 0 || gsSelectedRow >= gsBlindData.length) return;
  gsBlindData.splice(gsSelectedRow, 1);
  gsRenumberLevels();
  gsSelectedRow = -1;
  document.getElementById('gsBlindActions').style.display = 'none';
  gsRenderBlindTable();
}

function gsAddBlindRow() {
  const insertAt = gsSelectedRow >= 0 ? gsSelectedRow + 1 : gsBlindData.length;
  const lastBlind = gsBlindData.filter(r => !r.isBreak).pop();
  gsBlindData.splice(insertAt, 0, {
    lv: 0, sb: lastBlind ? lastBlind.sb * 2 : 100, bb: lastBlind ? lastBlind.bb * 2 : 200,
    ante: lastBlind ? Math.round(lastBlind.ante * 1.5) : 25, time: 10
  });
  gsRenumberLevels();
  gsSelectedRow = -1;
  document.getElementById('gsBlindActions').style.display = 'none';
  gsRenderBlindTable();
}

function gsAddBreakRow() {
  const insertAt = gsSelectedRow >= 0 ? gsSelectedRow + 1 : gsBlindData.length;
  gsBlindData.splice(insertAt, 0, { isBreak: true, time: 5 });
  gsSelectedRow = -1;
  document.getElementById('gsBlindActions').style.display = 'none';
  gsRenderBlindTable();
}

function gsInitDefaults() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const dtStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  const displayStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  const el = document.getElementById('gsStartTime');
  if (el) el.value = dtStr;
  const textEl = document.getElementById('gsStartTimeText');
  if (textEl) textEl.textContent = displayStr;
  gsBlindData = JSON.parse(JSON.stringify(defaultBlindLevels));
  gsSelectedRow = -1;
  gsRenderBlindTable();
  // 첫번째 탭으로 리셋
  switchGameSetupTab('general');
}

function gsToggleTimeBank() {
  const on = document.getElementById('gsTimeBank').checked;
  document.getElementById('gsTimeBankOptions').style.display = on ? '' : 'none';
}

function gsCreateGame() {
  const config = {
    title: document.getElementById('gsTitle').value,
    startStack: document.getElementById('gsStartStack').value,
    rebuy: parseInt(document.getElementById('gsRebuy').textContent, 10),
    tableType: parseInt(document.getElementById('gsTableType').textContent, 10),
    startTime: document.getElementById('gsStartTime').value,
    actionTime: parseInt(document.getElementById('gsActionTime').value, 10),
    blindStructure: document.querySelector('#gsBlindStructure .gs-segment-btn.active')?.dataset.value,
    ante: document.querySelector('#gsAnte .gs-segment-btn.active')?.dataset.value,
    blindLevels: gsBlindData,
    totalBuyin: parseInt(document.getElementById('gsTotalBuyin').value, 10),
    prizeStructure: document.querySelector('#gsPrizeStructure .gs-segment-btn.active')?.dataset.value,
    inTheMoney: document.querySelector('#gsInTheMoney .gs-segment-btn.active')?.dataset.value,
    guarantee: parseInt(document.getElementById('gsGuarantee').value, 10),
    timeBank: document.getElementById('gsTimeBank').checked,
    initialTimeBank: document.getElementById('gsInitialTimeBank').value,
    extraTime: document.getElementById('gsExtraTime').value,
  };
  console.log('Game config:', config);
  alert('게임이 생성되었습니다! (Demo)');
}

/* ===== DateTimePicker ===== */
let dtpYear, dtpMonth, dtpDay, dtpHour, dtpMinute;

function dtpOpen() {
  const val = document.getElementById('gsStartTime').value; // "YYYY-MM-DDTHH:MM"
  let d;
  if (val) {
    const parts = val.split('T');
    const dp = parts[0].split('-');
    const tp = (parts[1] || '00:00').split(':');
    d = new Date(+dp[0], +dp[1]-1, +dp[2], +tp[0], +tp[1]);
  } else {
    d = new Date();
  }
  dtpYear = d.getFullYear();
  dtpMonth = d.getMonth();
  dtpDay = d.getDate();
  dtpHour = d.getHours();
  dtpMinute = Math.round(d.getMinutes() / 5) * 5;
  if (dtpMinute >= 60) { dtpMinute = 55; }
  dtpRenderCalendar();
  dtpUpdateTimeLabels();
  const modal = document.getElementById('dtpModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function dtpClose() {
  dtpCloseAllDropdowns();
  const modal = document.getElementById('dtpModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function dtpSelect() {
  const pad = n => String(n).padStart(2, '0');
  const dtStr = dtpYear + '-' + pad(dtpMonth+1) + '-' + pad(dtpDay) + 'T' + pad(dtpHour) + ':' + pad(dtpMinute);
  const displayStr = dtpYear + '-' + pad(dtpMonth+1) + '-' + pad(dtpDay) + ' ' + pad(dtpHour) + ':' + pad(dtpMinute);
  document.getElementById('gsStartTime').value = dtStr;
  document.getElementById('gsStartTimeText').textContent = displayStr;
  dtpClose();
}

function dtpToday() {
  const now = new Date();
  dtpYear = now.getFullYear();
  dtpMonth = now.getMonth();
  dtpDay = now.getDate();
  dtpRenderCalendar();
}

function dtpPrevMonth() {
  dtpCloseAllDropdowns();
  dtpMonth--;
  if (dtpMonth < 0) { dtpMonth = 11; dtpYear--; }
  dtpRenderCalendar();
}

function dtpNextMonth() {
  dtpCloseAllDropdowns();
  dtpMonth++;
  if (dtpMonth > 11) { dtpMonth = 0; dtpYear++; }
  dtpRenderCalendar();
}

function dtpRenderCalendar() {
  // 라벨 업데이트
  document.getElementById('dtpYearLabel').textContent = dtpYear + '년';
  document.getElementById('dtpMonthLabel').textContent = (dtpMonth + 1) + '월';

  const container = document.getElementById('dtpDays');
  container.innerHTML = '';

  const firstDay = new Date(dtpYear, dtpMonth, 1).getDay(); // 0=일
  const daysInMonth = new Date(dtpYear, dtpMonth + 1, 0).getDate();
  const daysInPrev = new Date(dtpYear, dtpMonth, 0).getDate();

  const today = new Date();
  const todayY = today.getFullYear();
  const todayM = today.getMonth();
  const todayD = today.getDate();

  // 이전 달 날짜
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrev - i;
    const pm = dtpMonth - 1 < 0 ? 11 : dtpMonth - 1;
    const py = dtpMonth - 1 < 0 ? dtpYear - 1 : dtpYear;
    const el = document.createElement('div');
    el.className = 'dtp-day other-month';
    el.textContent = day;
    el.onclick = () => dtpSelectDay(day, pm, py);
    container.appendChild(el);
  }

  // 이번 달 날짜
  for (let d = 1; d <= daysInMonth; d++) {
    const el = document.createElement('div');
    let cls = 'dtp-day';
    if (d === todayD && dtpMonth === todayM && dtpYear === todayY) cls += ' today';
    if (d === dtpDay && dtpMonth === dtpMonth && dtpYear === dtpYear) cls += ' selected';
    el.className = cls;
    el.textContent = d;
    const dd = d;
    el.onclick = () => dtpSelectDay(dd, dtpMonth, dtpYear);
    container.appendChild(el);
  }

  // 다음 달 날짜 (6줄 = 42칸 채우기)
  const totalCells = firstDay + daysInMonth;
  const remaining = totalCells <= 35 ? (35 - totalCells) : (42 - totalCells);
  const nm = dtpMonth + 1 > 11 ? 0 : dtpMonth + 1;
  const ny = dtpMonth + 1 > 11 ? dtpYear + 1 : dtpYear;
  for (let d = 1; d <= remaining; d++) {
    const el = document.createElement('div');
    el.className = 'dtp-day other-month';
    el.textContent = d;
    const dd = d;
    el.onclick = () => dtpSelectDay(dd, nm, ny);
    container.appendChild(el);
  }
}

function dtpSelectDay(day, month, year) {
  dtpCloseAllDropdowns();
  dtpYear = year;
  dtpMonth = month;
  dtpDay = day;
  dtpRenderCalendar();
}

function dtpUpdateTimeLabels() {
  document.getElementById('dtpHourLabel').textContent = dtpHour + '시';
  document.getElementById('dtpMinuteLabel').textContent = String(dtpMinute).padStart(2, '0') + '분';
}

/* 드롭다운 토글 함수들 */
function dtpCloseAllDropdowns() {
  document.querySelectorAll('#dtpModal .dtp-dropdown-list').forEach(el => el.classList.remove('active'));
}

function dtpToggleDropdown(listId, renderFn) {
  const list = document.getElementById(listId);
  const wasActive = list.classList.contains('active');
  dtpCloseAllDropdowns();
  if (!wasActive) {
    renderFn(list);
    list.classList.add('active');
  }
}

function dtpToggleYearList() {
  dtpToggleDropdown('dtpYearList', (list) => {
    list.innerHTML = '';
    for (let y = dtpYear - 5; y <= dtpYear + 5; y++) {
      const div = document.createElement('div');
      div.textContent = y + '년';
      if (y === dtpYear) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectYear(y); };
      list.appendChild(div);
    }
  });
}

function dtpToggleMonthList() {
  dtpToggleDropdown('dtpMonthList', (list) => {
    list.innerHTML = '';
    for (let m = 0; m < 12; m++) {
      const div = document.createElement('div');
      div.textContent = (m + 1) + '월';
      if (m === dtpMonth) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectMonth(m); };
      list.appendChild(div);
    }
  });
}

function dtpToggleHourList() {
  dtpToggleDropdown('dtpHourList', (list) => {
    list.innerHTML = '';
    for (let h = 0; h < 24; h++) {
      const div = document.createElement('div');
      div.textContent = h + '시';
      if (h === dtpHour) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectHour(h); };
      list.appendChild(div);
    }
  });
}

function dtpToggleMinuteList() {
  dtpToggleDropdown('dtpMinuteList', (list) => {
    list.innerHTML = '';
    for (let m = 0; m < 60; m += 5) {
      const div = document.createElement('div');
      div.textContent = String(m).padStart(2, '0') + '분';
      if (m === dtpMinute) div.className = 'active';
      div.onclick = (e) => { e.stopPropagation(); dtpSelectMinute(m); };
      list.appendChild(div);
    }
  });
}

function dtpSelectYear(y) {
  dtpYear = y;
  dtpCloseAllDropdowns();
  dtpRenderCalendar();
}

function dtpSelectMonth(m) {
  dtpMonth = m;
  dtpCloseAllDropdowns();
  dtpRenderCalendar();
}

function dtpSelectHour(h) {
  dtpHour = h;
  dtpCloseAllDropdowns();
  dtpUpdateTimeLabels();
}

function dtpSelectMinute(m) {
  dtpMinute = m;
  dtpCloseAllDropdowns();
  dtpUpdateTimeLabels();
}

/* ── Account Edit ── */
function aeInit() {
  const s = JSON.parse(localStorage.getItem('lulu_session') || '{}');
  const idEl = document.getElementById('aeCurrentId');
  if (idEl) idEl.value = s.id || '';
  document.getElementById('aeCurrentPw') && (document.getElementById('aeCurrentPw').value = '');
  document.getElementById('aeNewPw') && (document.getElementById('aeNewPw').value = '');
  document.getElementById('aeConfirmPw') && (document.getElementById('aeConfirmPw').value = '');
}

function aeChangePw() {
  const t = i18n[currentLang] || i18n.ko;
  const curPw = document.getElementById('aeCurrentPw').value;
  const newPw = document.getElementById('aeNewPw').value;
  const confirmPw = document.getElementById('aeConfirmPw').value;
  if (!curPw || !newPw || !confirmPw) { alert(t.ae_pw_empty); return; }
  if (newPw !== confirmPw) { alert(t.ae_pw_mismatch); return; }
  const s = JSON.parse(localStorage.getItem('lulu_session') || '{}');
  const users = JSON.parse(localStorage.getItem('lulu_users') || '[]');
  const u = users.find(u => u.email === s.email);
  if (u && u.password !== curPw) { alert(t.ae_pw_wrong); return; }
  if (u) { u.password = newPw; localStorage.setItem('lulu_users', JSON.stringify(users)); }
  document.getElementById('aeCurrentPw').value = '';
  document.getElementById('aeNewPw').value = '';
  document.getElementById('aeConfirmPw').value = '';
  alert(t.ae_pw_success);
}

/* ── Mailbox ── */
const demoMails = [
  { id:1, title:'컴포즈 기프티콘 당첨', reward:'🎁', expireHours: 17*24, read:false },
  { id:2, title:'주간 출석 보상', reward:'🪙', expireHours: 9, read:true },
  { id:3, title:'토너먼트 입상 보상', reward:'🏆', expireHours: 3*24, read:false },
  { id:4, title:'레벨업 축하 선물', reward:'🎉', expireHours: 25*24, read:true },
  { id:5, title:'이벤트 참여 보상', reward:'💎', expireHours: 5*24, read:false },
  { id:6, title:'친구 초대 리워드', reward:'🎫', expireHours: 12*24, read:true },
  { id:7, title:'시즌 종료 보상', reward:'👑', expireHours: 2, read:false },
];

function mbRenderList() {
  const t = i18n[currentLang] || i18n.ko;
  const el = document.getElementById('mbMailList');
  if (!el) return;
  if (demoMails.length === 0) {
    el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--text-muted);font-size:14px;">' + t.mb_empty + '</div>';
    return;
  }
  const sorted = [...demoMails].sort((a, b) => a.read - b.read);
  el.innerHTML = sorted.map(m => {
    let timeStr = '';
    if (m.expireHours >= 24) {
      timeStr = '⏱ ' + Math.floor(m.expireHours / 24) + (currentLang === 'en' ? 'd' : currentLang === 'ja' ? '日' : '일');
    } else {
      timeStr = '⏱ ' + m.expireHours + (currentLang === 'en' ? 'h' : currentLang === 'ja' ? '時間' : '시간');
    }
    const mailIcon = m.read ? '✉️' : '📩';
    const btnText = m.read ? t.mb_btn_done : t.mb_btn_claim;
    const btnClass = m.read ? 'mb-item-btn mb-btn-done' : 'mb-item-btn';
    return '<div class="mb-item' + (m.read ? ' mb-read' : '') + '">' +
      '<div class="mb-item-icon">' + mailIcon + '</div>' +
      '<div class="mb-item-body">' +
        '<div class="mb-item-title">' + m.title + '</div>' +
        '<div class="mb-item-row">' +
          '<div class="mb-item-reward">' + m.reward + '</div>' +
          '<span class="mb-item-timer">' + timeStr + '</span>' +
        '</div>' +
      '</div>' +
      '<button class="' + btnClass + '">' + btnText + '</button>' +
    '</div>';
  }).join('');
}

/* ── Host ── */
function hostRenderList(keyword) {
  const lang = currentLang || 'ko';
  const t = i18n[lang] || i18n.ko;
  const statusMap = {
    registering: { label: t.tn_status_registering || '모집중', cls: 'registering' },
    ready: { label: t.tn_status_ready || '준비중', cls: 'ready' },
    playing: { label: t.tn_status_playing || '진행중', cls: 'playing' },
    finished: { label: t.tn_status_finished || '종료', cls: 'finished' },
  };
  const feeLabel = t.tn_fee_free || '무료';
  const startsLabel = t.tn_starts_in || 'Starts In';
  const manualLabel = t.tn_manual_start || '수동 시작';

  function buildCard(item) {
    const s = statusMap[item.status] || statusMap.registering;
    const fee = item.fee === 'free' ? feeLabel : item.fee;
    const startVal = item.startType === 'manual' ? manualLabel : item.startType;
    return '<div class="tn-card">' +
      '<div class="tn-card-left">' +
        '<span class="tn-badge ' + s.cls + '">' + s.label + '</span>' +
        '<span class="tn-starts-label">' + startsLabel + '</span>' +
        '<span class="tn-starts-value">' + startVal + '</span>' +
      '</div>' +
      '<div class="tn-card-right">' +
        '<div class="tn-name">' + item.name + '</div>' +
        '<div class="tn-meta">' +
          '<span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span>' +
          '<span class="tn-meta-item">' + fee + '</span>' +
          '<span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ' + item.players + '/' + item.maxPlayers + '</span>' +
          '<span class="tn-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg> ' + item.prize + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  let items = demoTournaments.filter(item => item.registered);
  if (keyword) {
    const kw = keyword.toLowerCase();
    items = items.filter(item => item.name.toLowerCase().includes(kw));
  }
  const el = document.getElementById('hostTnList');
  if (!el) return;
  const emptyMsg = t.host_empty || '개설한 토너먼트가 없습니다';
  el.innerHTML = items.length ? items.map(buildCard).join('') : '<div class="tn-empty">' + emptyMsg + '</div>';
}

function hostFilter() {
  const v = document.getElementById('hostSearchInput').value.trim();
  hostRenderList(v);
}

// === 거래 내역 ===
const demoTransactions = [
  { id:1, type:'gold', direction:'plus', amount:10000, after:52400, label:'토너먼트 우승 보상', sub:'주간 챔피언십', date:'2026-02-26' },
  { id:2, type:'diamond', direction:'minus', amount:50, after:450, label:'아이템 구매', sub:'프리미엄 카드 스킨', date:'2026-02-26' },
  { id:3, type:'gold', direction:'minus', amount:500, after:42400, label:'토너먼트 참가비', sub:'하이롤러 토너먼트', date:'2026-02-25' },
  { id:4, type:'gold', direction:'plus', amount:2000, after:42900, label:'일일 출석 보상', sub:'7일 연속 출석', date:'2026-02-25' },
  { id:5, type:'diamond', direction:'plus', amount:100, after:500, label:'다이아 충전', sub:'상점 구매', date:'2026-02-25' },
  { id:6, type:'gold', direction:'minus', amount:1000, after:40900, label:'게임 바이인', sub:'VIP 라운지', date:'2026-02-24' },
  { id:7, type:'gold', direction:'plus', amount:5500, after:41900, label:'게임 승리 보상', sub:'하이롤러 테이블', date:'2026-02-24' },
  { id:8, type:'diamond', direction:'minus', amount:30, after:400, label:'이모티콘 구매', sub:'럭키 이모티콘 팩', date:'2026-02-24' },
  { id:9, type:'gold', direction:'plus', amount:500, after:36400, label:'친구 초대 보상', sub:'신규 유저 초대', date:'2026-02-23' },
  { id:10, type:'gold', direction:'minus', amount:2000, after:35900, label:'토너먼트 참가비', sub:'루키 토너먼트', date:'2026-02-23' },
  { id:11, type:'diamond', direction:'plus', amount:200, after:430, label:'시즌 보상', sub:'시즌 3 달성 보상', date:'2026-02-22' },
  { id:12, type:'gold', direction:'plus', amount:3000, after:37900, label:'이벤트 보상', sub:'발렌타인 특별 이벤트', date:'2026-02-22' },
];

let txCurrentFilter = 'all';

function txSwitchTab(filter) {
  txCurrentFilter = filter;
  document.querySelectorAll('.tx-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  txRenderList();
}

function txRenderList() {
  const t = i18n[currentLang] || i18n.ko;
  const list = document.getElementById('txList');
  let items = demoTransactions;
  if (txCurrentFilter !== 'all') {
    items = items.filter(tx => tx.type === txCurrentFilter);
  }
  if (items.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px 0;">' + t.tx_empty + '</div>';
    return;
  }
  let html = '';
  let lastDate = '';
  items.forEach(tx => {
    if (tx.date !== lastDate) {
      lastDate = tx.date;
      html += '<div class="tx-date-group">' + tx.date + '</div>';
    }
    const icon = tx.type === 'gold' ? '🪙' : '💎';
    const iconClass = tx.type === 'gold' ? 'gold' : 'diamond';
    const sign = tx.direction === 'plus' ? '+' : '-';
    const amountStr = sign + tx.amount.toLocaleString();
    html += '<div class="tx-item">';
    html += '<div class="tx-icon ' + iconClass + '">' + icon + '</div>';
    html += '<div class="tx-body"><div class="tx-label">' + tx.label + '</div><div class="tx-sub">' + tx.sub + '</div></div>';
    html += '<div class="tx-amount"><div class="tx-amount-value ' + tx.direction + '">' + amountStr + '</div>';
    html += '<div class="tx-amount-after">' + t.tx_after + ' ' + tx.after.toLocaleString() + '</div></div>';
    html += '</div>';
  });
  list.innerHTML = html;
}
