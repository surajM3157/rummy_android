
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/view/AlertSkin.exml'] = window.AlertSkin = (function (_super) {
	__extends(AlertSkin, _super);
	var AlertSkin$Skin1 = 	(function (_super) {
		__extends(AlertSkin$Skin1, _super);
		function AlertSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.result_exit";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin1;
	})(eui.Skin);

	var AlertSkin$Skin2 = 	(function (_super) {
		__extends(AlertSkin$Skin2, _super);
		function AlertSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin2;
	})(eui.Skin);

	var AlertSkin$Skin3 = 	(function (_super) {
		__extends(AlertSkin$Skin3, _super);
		function AlertSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin3;
	})(eui.Skin);

	function AlertSkin() {
		_super.call(this);
		this.skinParts = ["lbl_Context","lbl_Title","btn_Cancel","btn_Ok","btn_btnConfirm"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AlertSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.lbl_Context_i(),this.lbl_Title_i(),this.btn_Cancel_i(),this.btn_Ok_i(),this.btn_btnConfirm_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "game_json.tips";
		return t;
	};
	_proto.lbl_Context_i = function () {
		var t = new lz.UILabel();
		this.lbl_Context = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 180;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 25;
		t.text = "------";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.width = 500;
		t.wordWrap = true;
		t.y = 110;
		return t;
	};
	_proto.lbl_Title_i = function () {
		var t = new eui.Label();
		this.lbl_Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "黑体";
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "---";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 5;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 164;
		return t;
	};
	_proto.btn_Cancel_i = function () {
		var t = new eui.Button();
		this.btn_Cancel = t;
		t.bottom = 8;
		t.height = 60;
		t.label = "Cancel";
		t.left = 80;
		t.width = 130;
		t.skinName = AlertSkin$Skin1;
		return t;
	};
	_proto.btn_Ok_i = function () {
		var t = new eui.Button();
		this.btn_Ok = t;
		t.bottom = 8;
		t.height = 60;
		t.label = "Yes";
		t.right = 80;
		t.width = 130;
		t.skinName = AlertSkin$Skin2;
		return t;
	};
	_proto.btn_btnConfirm_i = function () {
		var t = new eui.Button();
		this.btn_btnConfirm = t;
		t.bottom = 8;
		t.height = 60;
		t.horizontalCenter = 0;
		t.label = "Confirm";
		t.width = 130;
		t.skinName = AlertSkin$Skin3;
		return t;
	};
	return AlertSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/battle/BattleRecordSkin.exml'] = window.BattleRecordSkin = (function (_super) {
	__extends(BattleRecordSkin, _super);
	var BattleRecordSkin$Skin4 = 	(function (_super) {
		__extends(BattleRecordSkin$Skin4, _super);
		function BattleRecordSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleRecordSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_json.common_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleRecordSkin$Skin4;
	})(eui.Skin);

	function BattleRecordSkin() {
		_super.call(this);
		this.skinParts = ["rectBack","grpContainer","btnColse"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.rectBack_i(),this._Image1_i(),this._Group1_i(),this.btnColse_i()];
	}
	var _proto = BattleRecordSkin.prototype;

	_proto.rectBack_i = function () {
		var t = new eui.Rect();
		this.rectBack = t;
		t.fillAlpha = 0.5;
		t.height = 720;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "recordboard_png";
		t.verticalCenter = 0;
		t.width = 700;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = -1;
		t.width = 640;
		t.y = 227;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 300;
		t.width = 640;
		t.x = 1;
		t.viewport = this.grpContainer_i();
		return t;
	};
	_proto.grpContainer_i = function () {
		var t = new eui.Group();
		this.grpContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 640;
		t.x = -51;
		t.y = 0;
		return t;
	};
	_proto.btnColse_i = function () {
		var t = new eui.Button();
		this.btnColse = t;
		t.height = 64;
		t.includeInLayout = false;
		t.label = "";
		t.width = 67;
		t.x = 923;
		t.y = 127;
		t.skinName = BattleRecordSkin$Skin4;
		return t;
	};
	return BattleRecordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/battle/BattleSettingSkin.exml'] = window.BattleSettingSkin = (function (_super) {
	__extends(BattleSettingSkin, _super);
	function BattleSettingSkin() {
		_super.call(this);
		this.skinParts = ["rectBackgroud","grpInfo","grpRule","imgSound","btnSound","grpSound","imgVibration","btnVibration","grpVibration","btnTips","grpGameTips","labLastGame","btnLast","grpLasGame","grpMenu","labGameType","labRoomId","labGameId","labParam1","labParam2","btnClose","grpGameInfo"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.rectBackgroud_i(),this.grpMenu_i(),this.grpGameInfo_i()];
	}
	var _proto = BattleSettingSkin.prototype;

	_proto.rectBackgroud_i = function () {
		var t = new eui.Rect();
		this.rectBackgroud = t;
		t.fillAlpha = 0.3;
		t.fillColor = 0x000000;
		t.height = 720;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grpMenu_i = function () {
		var t = new eui.Group();
		this.grpMenu = t;
		t.height = 720;
		t.width = 450;
		t.x = 830;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this.grpInfo_i(),this.grpRule_i(),this.grpSound_i(),this.grpVibration_i(),this.grpGameTips_i(),this.grpLasGame_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.9;
		t.height = 720;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 410;
		t.x = 20;
		t.y = 600;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 410;
		t.x = 20;
		t.y = 480;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 410;
		t.x = 20;
		t.y = 360;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 410;
		t.x = 20;
		t.y = 240;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 410;
		t.x = 20;
		t.y = 120;
		return t;
	};
	_proto.grpInfo_i = function () {
		var t = new eui.Group();
		this.grpInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.icon8";
		t.width = 80;
		t.x = 30;
		t.y = 20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Game Infomation";
		t.x = 130;
		t.y = 45;
		return t;
	};
	_proto.grpRule_i = function () {
		var t = new eui.Group();
		this.grpRule = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 120;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.icon6";
		t.width = 80;
		t.x = 30;
		t.y = 20;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Game Rule";
		t.x = 130;
		t.y = 45;
		return t;
	};
	_proto.grpSound_i = function () {
		var t = new eui.Group();
		this.grpSound = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 240;
		t.elementsContent = [this.imgSound_i(),this._Label3_i(),this.btnSound_i()];
		return t;
	};
	_proto.imgSound_i = function () {
		var t = new eui.Image();
		this.imgSound = t;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.icon1";
		t.width = 80;
		t.x = 30;
		t.y = 20;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Sound";
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto.btnSound_i = function () {
		var t = new eui.Image();
		this.btnSound = t;
		t.height = 43;
		t.source = "game_json.s1";
		t.width = 120;
		t.x = 295;
		t.y = 38;
		return t;
	};
	_proto.grpVibration_i = function () {
		var t = new eui.Group();
		this.grpVibration = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 360;
		t.elementsContent = [this.imgVibration_i(),this._Label4_i(),this.btnVibration_i()];
		return t;
	};
	_proto.imgVibration_i = function () {
		var t = new eui.Image();
		this.imgVibration = t;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.icon3";
		t.width = 80;
		t.x = 30;
		t.y = 20;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Vibration";
		t.x = 130;
		t.y = 45;
		return t;
	};
	_proto.btnVibration_i = function () {
		var t = new eui.Image();
		this.btnVibration = t;
		t.height = 43;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.s1";
		t.width = 120;
		t.x = 295;
		t.y = 38;
		return t;
	};
	_proto.grpGameTips_i = function () {
		var t = new eui.Group();
		this.grpGameTips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 480;
		t.elementsContent = [this._Image3_i(),this._Label5_i(),this.btnTips_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.icon5";
		t.width = 80;
		t.x = 30;
		t.y = 20;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Group Tips";
		t.x = 130;
		t.y = 45;
		return t;
	};
	_proto.btnTips_i = function () {
		var t = new eui.Image();
		this.btnTips = t;
		t.height = 43;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.s1";
		t.width = 120;
		t.x = 295;
		t.y = 38;
		return t;
	};
	_proto.grpLasGame_i = function () {
		var t = new eui.Group();
		this.grpLasGame = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 600;
		t.elementsContent = [this._Image4_i(),this.labLastGame_i(),this.btnLast_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.icon7";
		t.width = 80;
		t.x = 30;
		t.y = 20;
		return t;
	};
	_proto.labLastGame_i = function () {
		var t = new eui.Label();
		this.labLastGame = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Last Game";
		t.x = 130;
		t.y = 45;
		return t;
	};
	_proto.btnLast_i = function () {
		var t = new eui.Image();
		this.btnLast = t;
		t.height = 40;
		t.source = "game_json.check";
		t.width = 40;
		t.x = 341;
		t.y = 43;
		return t;
	};
	_proto.grpGameInfo_i = function () {
		var t = new eui.Group();
		this.grpGameInfo = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 800;
		t.elementsContent = [this._Image5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this.labGameType_i(),this._Label16_i(),this.labRoomId_i(),this.labGameId_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this.labParam1_i(),this.labParam2_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "backgroupd2_png";
		t.width = 800;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "Infomation";
		t.y = 15;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Game Type";
		t.x = 60;
		t.y = 110;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Game Variant";
		t.x = 60;
		t.y = 160;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Table ID";
		t.x = 60;
		t.y = 210;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Game ID";
		t.x = 60;
		t.y = 260;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Decks";
		t.x = 60;
		t.y = 310;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Turn Time";
		t.x = 60;
		t.y = 360;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Bonus Time";
		t.x = 60;
		t.y = 410;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Drop Points";
		t.x = 60;
		t.y = 460;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Points Value";
		t.x = 60;
		t.y = 510;
		return t;
	};
	_proto.labGameType_i = function () {
		var t = new eui.Label();
		this.labGameType = t;
		t.text = "Point Rummy";
		t.x = 490;
		t.y = 110;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.text = "13 Card Rummy";
		t.x = 490;
		t.y = 160;
		return t;
	};
	_proto.labRoomId_i = function () {
		var t = new eui.Label();
		this.labRoomId = t;
		t.text = "123456789";
		t.x = 490;
		t.y = 210;
		return t;
	};
	_proto.labGameId_i = function () {
		var t = new eui.Label();
		this.labGameId = t;
		t.text = "123456789";
		t.x = 490;
		t.y = 260;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.text = "2 Decks";
		t.x = 490;
		t.y = 310;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.text = "30 Sec";
		t.x = 490;
		t.y = 360;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.text = "30 Sec";
		t.x = 490;
		t.y = 410;
		return t;
	};
	_proto.labParam1_i = function () {
		var t = new eui.Label();
		this.labParam1 = t;
		t.text = "100";
		t.x = 490;
		t.y = 460;
		return t;
	};
	_proto.labParam2_i = function () {
		var t = new eui.Label();
		this.labParam2 = t;
		t.text = "100";
		t.x = 490;
		t.y = 510;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 60;
		t.source = "game_json.common_close";
		t.width = 60;
		t.x = 740;
		t.y = 1;
		return t;
	};
	return BattleSettingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/battle/BattleTipSkin.exml'] = window.BattleTipSkin = (function (_super) {
	__extends(BattleTipSkin, _super);
	function BattleTipSkin() {
		_super.call(this);
		this.skinParts = ["imgCheck","labTipText"];
		
		this.height = 30;
		this.width = 170;
		this.elementsContent = [this.imgCheck_i(),this.labTipText_i()];
	}
	var _proto = BattleTipSkin.prototype;

	_proto.imgCheck_i = function () {
		var t = new eui.Image();
		this.imgCheck = t;
		t.height = 20;
		t.source = "game_json.check1";
		t.width = 20;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.labTipText_i = function () {
		var t = new eui.Label();
		this.labTipText = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "Pure Sequence";
		t.textColor = 0x848484;
		t.width = 130;
		t.x = 35;
		t.y = 6;
		return t;
	};
	return BattleTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/battle/BattleUserSkin.exml'] = window.BattleUserSkin = (function (_super) {
	__extends(BattleUserSkin, _super);
	function BattleUserSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","labName","pHeadGroup","grpTimerBack","timerBack","labCodeTime","labBonusTime","pCodeTime","labState","pStateGroup","labScore","grpScore"];
		
		this.height = 125;
		this.width = 125;
		this.elementsContent = [this.pHeadGroup_i(),this.pCodeTime_i(),this.pStateGroup_i(),this.grpScore_i()];
	}
	var _proto = BattleUserSkin.prototype;

	_proto.pHeadGroup_i = function () {
		var t = new eui.Group();
		this.pHeadGroup = t;
		t.height = 125;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.imgHead_i(),this._Image2_i(),this.labName_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.userHeadBack";
		t.width = 100;
		t.y = 5.2;
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 90;
		t.y = 10.2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.nameBack";
		t.width = 123;
		t.x = 14;
		t.y = 93.8;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "User100001";
		t.textAlign = "center";
		t.width = 120;
		t.x = 15;
		t.y = 100.1;
		return t;
	};
	_proto.pCodeTime_i = function () {
		var t = new eui.Group();
		this.pCodeTime = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 100;
		t.y = 0;
		t.elementsContent = [this.grpTimerBack_i(),this.timerBack_i(),this.labCodeTime_i(),this.labBonusTime_i()];
		return t;
	};
	_proto.grpTimerBack_i = function () {
		var t = new eui.Group();
		this.grpTimerBack = t;
		t.height = 94;
		t.width = 94;
		t.x = 3;
		t.y = 5;
		return t;
	};
	_proto.timerBack_i = function () {
		var t = new eui.Image();
		this.timerBack = t;
		t.height = 94;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.timer";
		t.verticalCenter = 2;
		t.width = 94;
		return t;
	};
	_proto.labCodeTime_i = function () {
		var t = new eui.Label();
		this.labCodeTime = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.stroke = 1;
		t.text = "99";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.labBonusTime_i = function () {
		var t = new eui.Label();
		this.labBonusTime = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "BonusTime";
		t.textAlign = "center";
		t.width = 100;
		t.y = 73;
		return t;
	};
	_proto.pStateGroup_i = function () {
		var t = new eui.Group();
		this.pStateGroup = t;
		t.height = 125;
		t.width = 125;
		t.elementsContent = [this._Rect1_i(),this.labState_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 125;
		t.width = 125;
		t.y = 0;
		return t;
	};
	_proto.labState_i = function () {
		var t = new eui.Label();
		this.labState = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "disconnect";
		t.textAlign = "center";
		t.textColor = 0xdb2020;
		t.verticalCenter = -14.5;
		t.width = 130;
		t.x = 13;
		t.y = 54;
		return t;
	};
	_proto.grpScore_i = function () {
		var t = new eui.Group();
		this.grpScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.width = 30;
		t.x = 95;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.labScore_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0x000000;
		t.height = 25;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labScore_i = function () {
		var t = new eui.Label();
		this.labScore = t;
		t.height = 10;
		t.horizontalCenter = 0;
		t.size = 12;
		t.text = "240";
		t.textAlign = "center";
		t.width = 30;
		t.y = 2.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 8;
		t.text = "PTS";
		t.textAlign = "center";
		t.textColor = 0xEF950E;
		t.y = 16;
		return t;
	};
	return BattleUserSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/battle/CardSkin.exml'] = window.CardSkin = (function (_super) {
	__extends(CardSkin, _super);
	function CardSkin() {
		_super.call(this);
		this.skinParts = ["imgTipsLight","imgCardNum","imgCardJoker","labNum","cardGroup"];
		
		this.elementsContent = [this.cardGroup_i()];
	}
	var _proto = CardSkin.prototype;

	_proto.cardGroup_i = function () {
		var t = new eui.Group();
		this.cardGroup = t;
		t.height = 130;
		t.width = 95;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgTipsLight_i(),this.imgCardNum_i(),this.imgCardJoker_i(),this.labNum_i()];
		return t;
	};
	_proto.imgTipsLight_i = function () {
		var t = new eui.Image();
		this.imgTipsLight = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 96;
		t.height = 166;
		t.includeInLayout = false;
		t.source = "battle_json.card_light";
		t.touchEnabled = false;
		t.width = 133;
		t.x = 58;
		t.y = 78;
		return t;
	};
	_proto.imgCardNum_i = function () {
		var t = new eui.Image();
		this.imgCardNum = t;
		t.height = 130;
		t.source = "battle_json.card_mask";
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgCardJoker_i = function () {
		var t = new eui.Image();
		this.imgCardJoker = t;
		t.source = "battle_json.card_joker";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labNum_i = function () {
		var t = new eui.Label();
		this.labNum = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 48;
		t.horizontalCenter = 1.5;
		t.size = 30;
		t.text = "54";
		t.textAlign = "center";
		t.textColor = 0x125ba8;
		t.verticalAlign = "middle";
		t.width = 70;
		t.y = 38;
		return t;
	};
	return CardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/battle/BattleViewSkin.exml'] = window.BattleViewSkin = (function (_super) {
	__extends(BattleViewSkin, _super);
	var BattleViewSkin$Skin5 = 	(function (_super) {
		__extends(BattleViewSkin$Skin5, _super);
		function BattleViewSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleViewSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_json.battle_sort";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x903C00;
			t.verticalCenter = 0;
			return t;
		};
		return BattleViewSkin$Skin5;
	})(eui.Skin);

	var BattleViewSkin$Skin6 = 	(function (_super) {
		__extends(BattleViewSkin$Skin6, _super);
		function BattleViewSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleViewSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_json.battle_sort";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x903C00;
			t.verticalCenter = 0;
			return t;
		};
		return BattleViewSkin$Skin6;
	})(eui.Skin);

	var BattleViewSkin$Skin7 = 	(function (_super) {
		__extends(BattleViewSkin$Skin7, _super);
		function BattleViewSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleViewSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_json.battle_sort";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x903C00;
			t.verticalCenter = 0;
			return t;
		};
		return BattleViewSkin$Skin7;
	})(eui.Skin);

	var BattleViewSkin$Skin8 = 	(function (_super) {
		__extends(BattleViewSkin$Skin8, _super);
		function BattleViewSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleViewSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return BattleViewSkin$Skin8;
	})(eui.Skin);

	var BattleViewSkin$Skin9 = 	(function (_super) {
		__extends(BattleViewSkin$Skin9, _super);
		function BattleViewSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleViewSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "game_json.closeNew";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleViewSkin$Skin9;
	})(eui.Skin);

	var BattleViewSkin$Skin10 = 	(function (_super) {
		__extends(BattleViewSkin$Skin10, _super);
		function BattleViewSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleViewSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_json.battle_sort";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x903C00;
			t.verticalCenter = 0;
			return t;
		};
		return BattleViewSkin$Skin10;
	})(eui.Skin);

	function BattleViewSkin() {
		_super.call(this);
		this.skinParts = ["tossCard","grpUserHead","maskRect","outRect","finishRect","jokerCard","maskCard","outCard","finishCard","showCardGroup","head_1","head_4","head_5","head_3","head_6","head_2","labCostTxt","labCost","pDropGroup","labBalance","labName","labInfo","ptGroup","btnGroup","btnDisCard","btnFinish","labNoticeTip","btnNotice","battleNoticeGroup","roomGroup","tip1","tip2","tip3","tip4","tipGroup","grpBattleTip","rectCard","btnBattleTip","grpSingleGroup","cardGroup","labWatiTime","pMask","btnBack","btnRecord","btnSetting","labGuildText","guildGroup","btnContinue","imgDelay1","imgDelay2","imgDelay3","imgDelay4","labDelay","grpDelay","pGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.tossCard_i(),this.pGroup_i()];
	}
	var _proto = BattleViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.source = "battleBack_png";
		t.width = 1280;
		t.y = 0;
		return t;
	};
	_proto.tossCard_i = function () {
		var t = new CardView();
		this.tossCard = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.horizontalCenter = 0;
		t.skinName = "CardSkin";
		t.verticalCenter = 21;
		t.width = 95;
		return t;
	};
	_proto.pGroup_i = function () {
		var t = new eui.Group();
		this.pGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.grpUserHead_i(),this.showCardGroup_i(),this.roomGroup_i(),this.grpBattleTip_i(),this.cardGroup_i(),this.pMask_i(),this.btnBack_i(),this.btnRecord_i(),this.btnSetting_i(),this.guildGroup_i(),this.btnContinue_i(),this.grpDelay_i()];
		return t;
	};
	_proto.grpUserHead_i = function () {
		var t = new eui.Group();
		this.grpUserHead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.width = 1280;
		return t;
	};
	_proto.showCardGroup_i = function () {
		var t = new eui.Group();
		this.showCardGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.width = 680;
		t.y = 210;
		t.elementsContent = [this.maskRect_i(),this.outRect_i(),this.finishRect_i(),this.jokerCard_i(),this.maskCard_i(),this.outCard_i(),this.finishCard_i()];
		return t;
	};
	_proto.maskRect_i = function () {
		var t = new eui.Group();
		this.maskRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.verticalCenter = 0;
		t.width = 95;
		t.x = 120;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.4;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 49;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "CLOSEDECK";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 56;
		return t;
	};
	_proto.outRect_i = function () {
		var t = new eui.Group();
		this.outRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 95;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.4;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 49;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "OPENDECK";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 47;
		return t;
	};
	_proto.finishRect_i = function () {
		var t = new eui.Group();
		this.finishRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.verticalCenter = 0;
		t.width = 95;
		t.x = 466;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.4;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 49;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "FINISH DECK";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 67;
		return t;
	};
	_proto.jokerCard_i = function () {
		var t = new CardView();
		this.jokerCard = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 76;
		t.height = 152;
		t.includeInLayout = false;
		t.rotation = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CardSkin";
		t.width = 111;
		t.x = 100;
		t.y = 77;
		return t;
	};
	_proto.maskCard_i = function () {
		var t = new CardView();
		this.maskCard = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CardSkin";
		t.x = 120;
		t.y = 15;
		return t;
	};
	_proto.outCard_i = function () {
		var t = new CardView();
		this.outCard = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CardSkin";
		t.y = 15;
		return t;
	};
	_proto.finishCard_i = function () {
		var t = new CardView();
		this.finishCard = t;
		t.height = 130;
		t.skinName = "CardSkin";
		t.width = 95;
		t.x = 466;
		t.y = 15;
		return t;
	};
	_proto.roomGroup_i = function () {
		var t = new eui.Group();
		this.roomGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.head_1_i(),this.head_4_i(),this.head_5_i(),this.head_3_i(),this.head_6_i(),this.head_2_i(),this.pDropGroup_i(),this.ptGroup_i(),this.btnGroup_i(),this.btnDisCard_i(),this.btnFinish_i(),this.battleNoticeGroup_i()];
		return t;
	};
	_proto.head_1_i = function () {
		var t = new BattleUserHeadView();
		this.head_1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "BattleUserSkin";
		t.visible = false;
		return t;
	};
	_proto.head_4_i = function () {
		var t = new BattleUserHeadView();
		this.head_4 = t;
		t.horizontalCenter = 0;
		t.skinName = "BattleUserSkin";
		t.visible = false;
		t.y = 57;
		return t;
	};
	_proto.head_5_i = function () {
		var t = new BattleUserHeadView();
		this.head_5 = t;
		t.skinName = "BattleUserSkin";
		t.visible = false;
		t.x = 308;
		t.y = 57;
		return t;
	};
	_proto.head_3_i = function () {
		var t = new BattleUserHeadView();
		this.head_3 = t;
		t.skinName = "BattleUserSkin";
		t.visible = false;
		t.x = 848;
		t.y = 57;
		return t;
	};
	_proto.head_6_i = function () {
		var t = new BattleUserHeadView();
		this.head_6 = t;
		t.skinName = "BattleUserSkin";
		t.visible = false;
		t.x = 38;
		t.y = 155;
		return t;
	};
	_proto.head_2_i = function () {
		var t = new BattleUserHeadView();
		this.head_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BattleUserSkin";
		t.visible = false;
		t.x = 1118;
		t.y = 155;
		return t;
	};
	_proto.pDropGroup_i = function () {
		var t = new eui.Group();
		this.pDropGroup = t;
		t.x = 84;
		t.y = 628;
		t.elementsContent = [this._Image2_i(),this.labCostTxt_i(),this.labCost_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "battle_json.battle_cost";
		t.width = 154;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labCostTxt_i = function () {
		var t = new eui.Label();
		this.labCostTxt = t;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "Drop";
		t.textAlign = "center";
		t.width = 154;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labCost_i = function () {
		var t = new eui.Label();
		this.labCost = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 25;
		t.text = "2000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 0;
		t.y = 32;
		return t;
	};
	_proto.ptGroup_i = function () {
		var t = new eui.Group();
		this.ptGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.width = 744;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this.labBalance_i(),this.labName_i(),this.labInfo_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.horizontalCenter = 0;
		t.source = "battle_json.titleBack2";
		t.width = 270;
		t.y = -2;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "battle_json.titleBack1";
		t.width = 270;
		t.x = 464.5;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.source = "battle_json.titleBack1";
		t.width = 270;
		t.x = 10.5;
		t.y = 0;
		return t;
	};
	_proto.labBalance_i = function () {
		var t = new eui.Label();
		this.labBalance = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 228;
		t.size = 20;
		t.text = "Balance：1000000";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = -1;
		t.width = 200;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Point Rummy";
		t.textAlign = "center";
		t.width = 200;
		t.y = 12;
		return t;
	};
	_proto.labInfo_i = function () {
		var t = new eui.Label();
		this.labInfo = t;
		t.size = 20;
		t.text = "Point Value：200";
		t.textAlign = "center";
		t.width = 200;
		t.x = 41;
		t.y = 15;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Button();
		this.btnGroup = t;
		t.height = 64;
		t.label = "Group";
		t.width = 144;
		t.x = 818;
		t.y = 628;
		t.skinName = BattleViewSkin$Skin5;
		return t;
	};
	_proto.btnDisCard_i = function () {
		var t = new eui.Button();
		this.btnDisCard = t;
		t.height = 64;
		t.label = "DisCard";
		t.width = 144;
		t.x = 818;
		t.y = 628;
		t.skinName = BattleViewSkin$Skin6;
		return t;
	};
	_proto.btnFinish_i = function () {
		var t = new eui.Button();
		this.btnFinish = t;
		t.height = 64;
		t.label = "Finish";
		t.width = 144;
		t.x = 324;
		t.y = 628;
		t.skinName = BattleViewSkin$Skin7;
		return t;
	};
	_proto.battleNoticeGroup_i = function () {
		var t = new eui.Group();
		this.battleNoticeGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.y = 330;
		t.elementsContent = [this._Rect4_i(),this.labNoticeTip_i(),this.btnNotice_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.8;
		t.height = 80;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labNoticeTip_i = function () {
		var t = new eui.Label();
		this.labNoticeTip = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Please group your cards and Declare";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 572;
		t.x = 8;
		return t;
	};
	_proto.btnNotice_i = function () {
		var t = new eui.Button();
		this.btnNotice = t;
		t.label = "Declare";
		t.verticalCenter = 0;
		t.x = 590.5;
		t.skinName = BattleViewSkin$Skin8;
		return t;
	};
	_proto.grpBattleTip_i = function () {
		var t = new eui.Group();
		this.grpBattleTip = t;
		t.anchorOffsetX = 0;
		t.height = 170;
		t.width = 180;
		t.x = 71;
		t.y = 245;
		t.elementsContent = [this._Image6_i(),this._Label4_i(),this.tipGroup_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "battle_json.battle_tip";
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "Group Tip";
		t.textAlign = "center";
		t.width = 152;
		t.x = 15;
		t.y = 8;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.width = 170;
		t.x = 5;
		t.y = 41;
		t.elementsContent = [this.tip1_i(),this.tip2_i(),this.tip3_i(),this.tip4_i()];
		return t;
	};
	_proto.tip1_i = function () {
		var t = new BattleTipView();
		this.tip1 = t;
		t.height = 30;
		t.skinName = "BattleTipSkin";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tip2_i = function () {
		var t = new BattleTipView();
		this.tip2 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BattleTipSkin";
		t.width = 170;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.tip3_i = function () {
		var t = new BattleTipView();
		this.tip3 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BattleTipSkin";
		t.width = 170;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto.tip4_i = function () {
		var t = new BattleTipView();
		this.tip4 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BattleTipSkin";
		t.width = 170;
		t.x = 0;
		t.y = 90;
		return t;
	};
	_proto.cardGroup_i = function () {
		var t = new eui.Group();
		this.cardGroup = t;
		t.height = 720;
		t.touchChildren = true;
		t.touchThrough = true;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectCard_i(),this.btnBattleTip_i(),this.grpSingleGroup_i()];
		return t;
	};
	_proto.rectCard_i = function () {
		var t = new eui.Rect();
		this.rectCard = t;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1280;
		t.y = 460;
		return t;
	};
	_proto.btnBattleTip_i = function () {
		var t = new eui.Image();
		this.btnBattleTip = t;
		t.height = 70;
		t.source = "game_json.tipNew";
		t.width = 70;
		t.x = 0;
		t.y = 350;
		return t;
	};
	_proto.grpSingleGroup_i = function () {
		var t = new eui.Group();
		this.grpSingleGroup = t;
		t.height = 130;
		t.width = 95;
		t.x = 1130;
		t.y = 460;
		t.elementsContent = [this._Rect5_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.4;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 49;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "SingleGroup";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 63;
		return t;
	};
	_proto.pMask_i = function () {
		var t = new eui.Group();
		this.pMask = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect6_i(),this.labWatiTime_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.labWatiTime_i = function () {
		var t = new eui.Label();
		this.labWatiTime = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "Game starting in 0 s";
		t.textAlign = "center";
		t.verticalCenter = -100;
		t.width = 500;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.height = 70;
		t.label = "";
		t.left = 20;
		t.top = 20;
		t.width = 70;
		t.skinName = BattleViewSkin$Skin9;
		return t;
	};
	_proto.btnRecord_i = function () {
		var t = new eui.Image();
		this.btnRecord = t;
		t.height = 70;
		t.source = "game_json.recordNew";
		t.width = 70;
		t.x = 127;
		t.y = 18;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Image();
		this.btnSetting = t;
		t.height = 60;
		t.source = "battle_json.btnSetting";
		t.width = 60;
		t.x = 1190;
		t.y = 24;
		return t;
	};
	_proto.guildGroup_i = function () {
		var t = new eui.Group();
		this.guildGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.width = 418;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Rect7_i(),this.labGuildText_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 181;
		t.source = "battle_json.guilder";
		t.width = 200;
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 25;
		t.ellipseWidth = 25;
		t.fillColor = 0xefd78d;
		t.height = 90;
		t.strokeWeight = 1;
		t.width = 406;
		t.x = 5;
		t.y = 145;
		return t;
	};
	_proto.labGuildText_i = function () {
		var t = new eui.Label();
		this.labGuildText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.lineSpacing = 4;
		t.size = 22;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 375;
		t.wordWrap = true;
		t.x = 20;
		t.y = 155;
		return t;
	};
	_proto.btnContinue_i = function () {
		var t = new eui.Button();
		this.btnContinue = t;
		t.anchorOffsetX = 0;
		t.height = 64;
		t.label = "Continue";
		t.width = 172;
		t.x = 1035.5;
		t.y = 628;
		t.skinName = BattleViewSkin$Skin10;
		return t;
	};
	_proto.grpDelay_i = function () {
		var t = new eui.Group();
		this.grpDelay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 150;
		t.x = 1021;
		t.y = 7;
		t.elementsContent = [this.imgDelay1_i(),this.imgDelay2_i(),this.imgDelay3_i(),this.imgDelay4_i(),this.labDelay_i()];
		return t;
	};
	_proto.imgDelay1_i = function () {
		var t = new eui.Image();
		this.imgDelay1 = t;
		t.height = 40;
		t.source = "battle_json.battle_wifi_1";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgDelay2_i = function () {
		var t = new eui.Image();
		this.imgDelay2 = t;
		t.height = 40;
		t.source = "battle_json.battle_wifi_2";
		t.width = 40;
		t.y = 0;
		return t;
	};
	_proto.imgDelay3_i = function () {
		var t = new eui.Image();
		this.imgDelay3 = t;
		t.height = 40;
		t.source = "battle_json.battle_wifi_3";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgDelay4_i = function () {
		var t = new eui.Image();
		this.imgDelay4 = t;
		t.height = 40;
		t.source = "battle_json.battle_wifi_4";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labDelay_i = function () {
		var t = new eui.Label();
		this.labDelay = t;
		t.size = 20;
		t.text = "200 ms";
		t.verticalCenter = 0;
		t.x = 47;
		return t;
	};
	return BattleViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/BindMobileSkin.exml'] = window.BindMobileSkin = (function (_super) {
	__extends(BindMobileSkin, _super);
	var BindMobileSkin$Skin11 = 	(function (_super) {
		__extends(BindMobileSkin$Skin11, _super);
		function BindMobileSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindMobileSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = 0;
			return t;
		};
		return BindMobileSkin$Skin11;
	})(eui.Skin);

	var BindMobileSkin$Skin12 = 	(function (_super) {
		__extends(BindMobileSkin$Skin12, _super);
		function BindMobileSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindMobileSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BindMobileSkin$Skin12;
	})(eui.Skin);

	function BindMobileSkin() {
		_super.call(this);
		this.skinParts = ["inputMobile","btnSend","inputOTP","btnBindMobile","btnClose"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.btnClose_i()];
	}
	var _proto = BindMobileSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 580;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Rect3_i(),this._Rect4_i(),this.inputMobile_i(),this._Label2_i(),this.btnSend_i(),this._Rect5_i(),this.inputOTP_i(),this.btnBindMobile_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xD6D4D4;
		t.height = 400;
		t.width = 580;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 30;
		t.text = "Use mobile number to continue...";
		t.textColor = 0x000000;
		t.width = 511;
		t.x = 36;
		t.y = 33;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 85;
		t.x = 32.5;
		t.y = 94;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 282;
		t.x = 135;
		t.y = 94;
		return t;
	};
	_proto.inputMobile_i = function () {
		var t = new eui.EditableText();
		this.inputMobile = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.maxChars = 11;
		t.prompt = "Mobile Number";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 254;
		t.x = 150;
		t.y = 98;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+91";
		t.textColor = 0x000000;
		t.x = 48;
		t.y = 114;
		return t;
	};
	_proto.btnSend_i = function () {
		var t = new eui.Button();
		this.btnSend = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "Send";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 112;
		t.x = 434;
		t.y = 94;
		t.skinName = BindMobileSkin$Skin11;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 516;
		t.x = 31;
		t.y = 190;
		return t;
	};
	_proto.inputOTP_i = function () {
		var t = new eui.EditableText();
		this.inputOTP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.maxChars = 6;
		t.prompt = "Enter OTP";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 477;
		t.x = 48;
		t.y = 194;
		return t;
	};
	_proto.btnBindMobile_i = function () {
		var t = new eui.Button();
		this.btnBindMobile = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0.5;
		t.label = "Bind Mobile";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 315;
		t.y = 298;
		t.skinName = BindMobileSkin$Skin12;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 60;
		t.source = "game_json.common_close";
		t.width = 60;
		t.x = 619;
		t.y = 422;
		return t;
	};
	return BindMobileSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/chat/ChatViewSkin.exml'] = window.ChatViewSkin = (function (_super) {
	__extends(ChatViewSkin, _super);
	var ChatViewSkin$Skin13 = 	(function (_super) {
		__extends(ChatViewSkin$Skin13, _super);
		function ChatViewSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChatViewSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChatViewSkin$Skin13;
	})(eui.Skin);

	function ChatViewSkin() {
		_super.call(this);
		this.skinParts = ["grpContent","contentScroller","inputSendText","btnSend"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ChatViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 1000;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.contentScroller_i(),this._Group1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 780;
		t.width = 700;
		t.x = 10;
		t.y = 70;
		t.viewport = this.grpContent_i();
		return t;
	};
	_proto.grpContent_i = function () {
		var t = new eui.Group();
		this.grpContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 780;
		t.width = 700;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 700;
		t.x = 10;
		t.y = 870;
		t.elementsContent = [this._Rect3_i(),this.inputSendText_i(),this.btnSend_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 70;
		t.verticalCenter = 0;
		t.width = 480;
		t.x = 10;
		return t;
	};
	_proto.inputSendText_i = function () {
		var t = new eui.EditableText();
		this.inputSendText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.maxChars = 300;
		t.prompt = "Text....";
		t.textColor = 0x1E1E1E;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 450;
		t.x = 25;
		return t;
	};
	_proto.btnSend_i = function () {
		var t = new eui.Button();
		this.btnSend = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "Send";
		t.verticalCenter = 0;
		t.width = 180;
		t.x = 509;
		t.skinName = ChatViewSkin$Skin13;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Game Customer";
		t.textAlign = "center";
		t.textColor = 0x474444;
		t.y = 18;
		return t;
	};
	return ChatViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/share/ShareViewSkin.exml'] = window.ShareViewSkin = (function (_super) {
	__extends(ShareViewSkin, _super);
	var ShareViewSkin$Skin14 = 	(function (_super) {
		__extends(ShareViewSkin$Skin14, _super);
		function ShareViewSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareViewSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareViewSkin$Skin14;
	})(eui.Skin);

	function ShareViewSkin() {
		_super.call(this);
		this.skinParts = ["imgCash","grpContact","grpWA","btnBonus"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = ShareViewSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this.imgCash_i(),this._Label2_i(),this._Group4_i(),this._Label9_i(),this._Group5_i(),this.btnBonus_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 1000;
		t.width = 720;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Reffer And Earn ";
		t.textAlign = "center";
		t.textColor = 0x474444;
		t.y = 18;
		return t;
	};
	_proto.imgCash_i = function () {
		var t = new eui.Image();
		this.imgCash = t;
		t.height = 40;
		t.source = "game_json.home_money";
		t.width = 40;
		t.x = 479;
		t.y = 8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "How It Works";
		t.textColor = 0x000000;
		t.x = 43;
		t.y = 80;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 310;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 120;
		t.elementsContent = [this._Rect3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xf2eded;
		t.height = 310;
		t.strokeColor = 0x888888;
		t.strokeWeight = 1;
		t.width = 640;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.width = 180;
		t.x = 25;
		t.y = 25;
		t.elementsContent = [this._Rect4_i(),this._Label3_i(),this._Label4_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 260;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "Step1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.y = 10;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Invite Friends";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.y = 55;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.step1";
		t.width = 150;
		t.y = 110;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.horizontalCenter = 0;
		t.width = 180;
		t.y = 25;
		t.elementsContent = [this._Rect5_i(),this._Label5_i(),this._Label6_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "Step2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.y = 10;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "Let them sign up & pay";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.wordWrap = true;
		t.y = 55;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.step2";
		t.width = 150;
		t.y = 110;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.width = 180;
		t.x = 435;
		t.y = 25;
		t.elementsContent = [this._Rect6_i(),this._Label7_i(),this._Label8_i(),this._Image3_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 260;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "Step3";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.y = 10;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "Get rewarded up to 5000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.wordWrap = true;
		t.y = 55;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.step3";
		t.width = 150;
		t.y = 110;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.text = "Share Now";
		t.textColor = 0x000000;
		t.x = 46;
		t.y = 455;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 640;
		t.x = 38;
		t.y = 495;
		t.elementsContent = [this._Rect7_i(),this._Label10_i(),this.grpContact_i(),this.grpWA_i(),this._Label13_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xf2eded;
		t.height = 300;
		t.strokeColor = 0x888888;
		t.strokeWeight = 1;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Share To Your Friends";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 18;
		return t;
	};
	_proto.grpContact_i = function () {
		var t = new eui.Group();
		this.grpContact = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 360;
		t.y = 50;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label11_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_json.btnBlue3";
		t.verticalCenter = 0;
		t.width = 360;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.contact_icon";
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 18;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "Invite Friends";
		t.verticalCenter = 0;
		t.x = 81;
		return t;
	};
	_proto.grpWA_i = function () {
		var t = new eui.Group();
		this.grpWA = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 360;
		t.y = 190;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label12_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "loading_json.btnGreen";
		t.verticalCenter = 0;
		t.width = 360;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "game_json.wa_icon";
		t.verticalCenter = -1;
		t.width = 50;
		t.x = 18;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "What's App Friends";
		t.x = 77;
		t.y = 24;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Open Your What's app";
		t.textColor = 0x000000;
		t.y = 158;
		return t;
	};
	_proto.btnBonus_i = function () {
		var t = new eui.Button();
		this.btnBonus = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.label = "Track Your Bonus";
		t.x = 55;
		t.y = 837;
		t.skinName = ShareViewSkin$Skin14;
		return t;
	};
	return ShareViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/share/BonusViewSkin.exml'] = window.BonusViewSkin = (function (_super) {
	__extends(BonusViewSkin, _super);
	var BonusViewSkin$Skin15 = 	(function (_super) {
		__extends(BonusViewSkin$Skin15, _super);
		function BonusViewSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BonusViewSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BonusViewSkin$Skin15;
	})(eui.Skin);

	function BonusViewSkin() {
		_super.call(this);
		this.skinParts = ["btnOpenShare","labNone","dataGroup"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BonusViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this.btnOpenShare_i(),this._Label1_i(),this._Rect2_i(),this._Rect3_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Rect4_i(),this.labNone_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnOpenShare_i = function () {
		var t = new eui.Button();
		this.btnOpenShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.horizontalCenter = 0;
		t.label = "Share Bonus";
		t.width = 500;
		t.y = 870;
		t.skinName = BonusViewSkin$Skin15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Track Your Bonus";
		t.textColor = 0x663300;
		t.x = 219;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 40;
		t.y = 57;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x592b0b;
		t.height = 60;
		t.width = 640;
		t.x = 40;
		t.y = 80;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "Name";
		t.x = 81;
		t.y = 99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "Bonus";
		t.x = 400;
		t.y = 99;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "Collect";
		t.x = 566;
		t.y = 99;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 700;
		t.width = 640;
		t.x = 40;
		t.y = 140;
		return t;
	};
	_proto.labNone_i = function () {
		var t = new eui.Label();
		this.labNone = t;
		t.horizontalCenter = 0;
		t.text = "You haven't invited any friends yet";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.width = 640;
		t.x = 40;
		t.y = 140;
		t.viewport = this.dataGroup_i();
		return t;
	};
	_proto.dataGroup_i = function () {
		var t = new eui.DataGroup();
		this.dataGroup = t;
		t.height = 700;
		t.itemRendererSkinName = BonusItemSkin;
		return t;
	};
	return BonusViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/lobby/AppDealRummySkin.exml'] = window.AppDealRummySkin = (function (_super) {
	__extends(AppDealRummySkin, _super);
	var AppDealRummySkin$Skin16 = 	(function (_super) {
		__extends(AppDealRummySkin$Skin16, _super);
		function AppDealRummySkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.btnGreen6_unable")
					])
			];
		}
		var _proto = AppDealRummySkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppDealRummySkin$Skin16;
	})(eui.Skin);

	function AppDealRummySkin() {
		_super.call(this);
		this.skinParts = ["selectBack","labDealCount3","labDealCount2","labDeals2","labDeals3","btnDeal2","btnDeal3","btnJia","btnJian","labValue1","labValue2","labValue3","labValue4","labValue5","labValue6","labValue7","labValue8","labValue9","btnSwitcher","btnRect1","btnRect2","btnRect3","btnRect4","btnRect5","btnRect6","btnRect7","btnRect8","btnRect9","grpSelectEntry","labMinEntry","btnEnter"];
		
		this.height = 810;
		this.width = 720;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = AppDealRummySkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group2_i(),this.grpSelectEntry_i(),this._Group3_i(),this.btnEnter_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 810;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 381;
		t.x = 169.5;
		t.y = 50;
		t.elementsContent = [this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Select Deals";
		t.textColor = 0x000000;
		t.y = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.width = 280;
		t.y = 50;
		t.elementsContent = [this._Rect2_i(),this.selectBack_i(),this.labDealCount3_i(),this.labDealCount2_i(),this.labDeals2_i(),this.labDeals3_i(),this.btnDeal2_i(),this.btnDeal3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectBack_i = function () {
		var t = new eui.Rect();
		this.selectBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 135;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.labDealCount3_i = function () {
		var t = new eui.Label();
		this.labDealCount3 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 169.5;
		t.y = 17;
		return t;
	};
	_proto.labDealCount2_i = function () {
		var t = new eui.Label();
		this.labDealCount2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 39.34;
		t.y = 17;
		return t;
	};
	_proto.labDeals2_i = function () {
		var t = new eui.Label();
		this.labDeals2 = t;
		t.size = 24;
		t.text = "Deals";
		t.textColor = 0x000000;
		t.x = 43;
		t.y = 50;
		return t;
	};
	_proto.labDeals3_i = function () {
		var t = new eui.Label();
		this.labDeals3 = t;
		t.size = 24;
		t.text = "Deals";
		t.textColor = 0xFFFFFF;
		t.x = 173;
		t.y = 50;
		return t;
	};
	_proto.btnDeal2_i = function () {
		var t = new eui.Rect();
		this.btnDeal2 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnDeal3_i = function () {
		var t = new eui.Rect();
		this.btnDeal3 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.grpSelectEntry_i = function () {
		var t = new eui.Group();
		this.grpSelectEntry = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 250;
		t.elementsContent = [this._Image1_i(),this.btnJia_i(),this.btnJian_i(),this.labValue1_i(),this.labValue2_i(),this.labValue3_i(),this.labValue4_i(),this.labValue5_i(),this.labValue6_i(),this.labValue7_i(),this.labValue8_i(),this.labValue9_i(),this.btnSwitcher_i(),this.btnRect1_i(),this.btnRect2_i(),this.btnRect3_i(),this.btnRect4_i(),this.btnRect5_i(),this.btnRect6_i(),this.btnRect7_i(),this.btnRect8_i(),this.btnRect9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.app_value_bar";
		t.width = 660;
		t.y = 17;
		return t;
	};
	_proto.btnJia_i = function () {
		var t = new eui.Image();
		this.btnJia = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.jiahao";
		t.width = 60;
		t.x = 655;
		t.y = 5;
		return t;
	};
	_proto.btnJian_i = function () {
		var t = new eui.Image();
		this.btnJian = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.jianhao";
		t.width = 60;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.labValue1_i = function () {
		var t = new eui.Label();
		this.labValue1 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 80;
		t.y = 65;
		return t;
	};
	_proto.labValue2_i = function () {
		var t = new eui.Label();
		this.labValue2 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 144;
		t.y = 65;
		return t;
	};
	_proto.labValue3_i = function () {
		var t = new eui.Label();
		this.labValue3 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "25";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 210;
		t.y = 65;
		return t;
	};
	_proto.labValue4_i = function () {
		var t = new eui.Label();
		this.labValue4 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 275;
		t.y = 65;
		return t;
	};
	_proto.labValue5_i = function () {
		var t = new eui.Label();
		this.labValue5 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 340;
		t.y = 65;
		return t;
	};
	_proto.labValue6_i = function () {
		var t = new eui.Label();
		this.labValue6 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "250";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 405;
		t.y = 65;
		return t;
	};
	_proto.labValue7_i = function () {
		var t = new eui.Label();
		this.labValue7 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "500";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 470;
		t.y = 65;
		return t;
	};
	_proto.labValue8_i = function () {
		var t = new eui.Label();
		this.labValue8 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 50;
		t.x = 529.5;
		t.y = 65;
		return t;
	};
	_proto.labValue9_i = function () {
		var t = new eui.Label();
		this.labValue9 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "2000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 50;
		t.x = 595;
		t.y = 65;
		return t;
	};
	_proto.btnSwitcher_i = function () {
		var t = new eui.Image();
		this.btnSwitcher = t;
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.switcher";
		t.width = 20;
		t.x = 610;
		t.y = 9;
		return t;
	};
	_proto.btnRect1_i = function () {
		var t = new eui.Rect();
		this.btnRect1 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.btnRect2_i = function () {
		var t = new eui.Rect();
		this.btnRect2 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 137;
		t.y = 0;
		return t;
	};
	_proto.btnRect3_i = function () {
		var t = new eui.Rect();
		this.btnRect3 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 202;
		t.y = 0;
		return t;
	};
	_proto.btnRect4_i = function () {
		var t = new eui.Rect();
		this.btnRect4 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 267;
		t.y = 0;
		return t;
	};
	_proto.btnRect5_i = function () {
		var t = new eui.Rect();
		this.btnRect5 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 332;
		t.y = 0;
		return t;
	};
	_proto.btnRect6_i = function () {
		var t = new eui.Rect();
		this.btnRect6 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 397;
		t.y = 0;
		return t;
	};
	_proto.btnRect7_i = function () {
		var t = new eui.Rect();
		this.btnRect7 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 462;
		t.y = 0;
		return t;
	};
	_proto.btnRect8_i = function () {
		var t = new eui.Rect();
		this.btnRect8 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 527;
		t.y = 0;
		return t;
	};
	_proto.btnRect9_i = function () {
		var t = new eui.Rect();
		this.btnRect9 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 592;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.x = 160;
		t.y = 400;
		t.elementsContent = [this._Rect3_i(),this.labMinEntry_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 80;
		t.width = 420;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labMinEntry_i = function () {
		var t = new lz.UILabel();
		this.labMinEntry = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 36;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "Entry Fee: ₹ 0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 0;
		t.width = 390;
		t.x = 4;
		return t;
	};
	_proto.btnEnter_i = function () {
		var t = new eui.Button();
		this.btnEnter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "PLAY NOW";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.y = 550;
		t.skinName = AppDealRummySkin$Skin16;
		return t;
	};
	return AppDealRummySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/lobby/AppPoolRummySkin.exml'] = window.AppPoolRummySkin = (function (_super) {
	__extends(AppPoolRummySkin, _super);
	var AppPoolRummySkin$Skin17 = 	(function (_super) {
		__extends(AppPoolRummySkin$Skin17, _super);
		function AppPoolRummySkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.btnGreen6_unable")
					])
			];
		}
		var _proto = AppPoolRummySkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppPoolRummySkin$Skin17;
	})(eui.Skin);

	function AppPoolRummySkin() {
		_super.call(this);
		this.skinParts = ["selectPlayerBack","labPlayerCount6","labPlayerCount2","labPlayers2","labPlayers6","btnSelect2","btnSelect6","selectPoolBack","labPool61","labPool101","labPool201","btnSelect61","btnSelect101","btnSelect201","btnJia","btnJian","labValue1","labValue2","labValue3","labValue4","labValue5","labValue6","labValue7","labValue8","labValue9","btnSwitcher","btnRect1","btnRect2","btnRect3","btnRect4","btnRect5","btnRect6","btnRect7","btnRect8","btnRect9","grpSelectEntry","labMinEntry","btnEnter"];
		
		this.height = 810;
		this.width = 720;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = AppPoolRummySkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group2_i(),this._Group4_i(),this.grpSelectEntry_i(),this._Group5_i(),this.btnEnter_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 810;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 381;
		t.x = 169.5;
		t.y = 24;
		t.elementsContent = [this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Select Players";
		t.textColor = 0x000000;
		t.y = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.width = 280;
		t.y = 50;
		t.elementsContent = [this._Rect2_i(),this.selectPlayerBack_i(),this.labPlayerCount6_i(),this.labPlayerCount2_i(),this.labPlayers2_i(),this.labPlayers6_i(),this.btnSelect2_i(),this.btnSelect6_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectPlayerBack_i = function () {
		var t = new eui.Rect();
		this.selectPlayerBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 135;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.labPlayerCount6_i = function () {
		var t = new eui.Label();
		this.labPlayerCount6 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "6";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 174.5;
		t.y = 17;
		return t;
	};
	_proto.labPlayerCount2_i = function () {
		var t = new eui.Label();
		this.labPlayerCount2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 39.34;
		t.y = 17;
		return t;
	};
	_proto.labPlayers2_i = function () {
		var t = new eui.Label();
		this.labPlayers2 = t;
		t.size = 24;
		t.text = "Players";
		t.textColor = 0x000000;
		t.x = 33;
		t.y = 50;
		return t;
	};
	_proto.labPlayers6_i = function () {
		var t = new eui.Label();
		this.labPlayers6 = t;
		t.size = 24;
		t.text = "Players";
		t.textColor = 0xFFFFFF;
		t.x = 168;
		t.y = 50;
		return t;
	};
	_proto.btnSelect2_i = function () {
		var t = new eui.Rect();
		this.btnSelect2 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 0;
		return t;
	};
	_proto.btnSelect6_i = function () {
		var t = new eui.Rect();
		this.btnSelect6 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 560;
		t.y = 200;
		t.elementsContent = [this._Label2_i(),this._Group3_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "Select Pool Games";
		t.textColor = 0x000000;
		t.y = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.width = 420;
		t.y = 50;
		t.elementsContent = [this._Rect3_i(),this.selectPoolBack_i(),this.labPool61_i(),this.labPool101_i(),this.labPool201_i(),this.btnSelect61_i(),this.btnSelect101_i(),this.btnSelect201_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.y = 0;
		return t;
	};
	_proto.selectPoolBack_i = function () {
		var t = new eui.Rect();
		this.selectPoolBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 135;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.labPool61_i = function () {
		var t = new eui.Label();
		this.labPool61 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "61";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 68;
		t.x = 38;
		return t;
	};
	_proto.labPool101_i = function () {
		var t = new eui.Label();
		this.labPool101 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "101";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 68;
		return t;
	};
	_proto.labPool201_i = function () {
		var t = new eui.Label();
		this.labPool201 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "201";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 68;
		t.x = 312;
		return t;
	};
	_proto.btnSelect61_i = function () {
		var t = new eui.Rect();
		this.btnSelect61 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 0;
		return t;
	};
	_proto.btnSelect101_i = function () {
		var t = new eui.Rect();
		this.btnSelect101 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.btnSelect201_i = function () {
		var t = new eui.Rect();
		this.btnSelect201 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.grpSelectEntry_i = function () {
		var t = new eui.Group();
		this.grpSelectEntry = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 400;
		t.elementsContent = [this._Image1_i(),this.btnJia_i(),this.btnJian_i(),this.labValue1_i(),this.labValue2_i(),this.labValue3_i(),this.labValue4_i(),this.labValue5_i(),this.labValue6_i(),this.labValue7_i(),this.labValue8_i(),this.labValue9_i(),this.btnSwitcher_i(),this.btnRect1_i(),this.btnRect2_i(),this.btnRect3_i(),this.btnRect4_i(),this.btnRect5_i(),this.btnRect6_i(),this.btnRect7_i(),this.btnRect8_i(),this.btnRect9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.app_value_bar";
		t.width = 660;
		t.y = 17;
		return t;
	};
	_proto.btnJia_i = function () {
		var t = new eui.Image();
		this.btnJia = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.jiahao";
		t.width = 60;
		t.x = 655;
		t.y = 5;
		return t;
	};
	_proto.btnJian_i = function () {
		var t = new eui.Image();
		this.btnJian = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.jianhao";
		t.width = 60;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.labValue1_i = function () {
		var t = new eui.Label();
		this.labValue1 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 80;
		t.y = 65;
		return t;
	};
	_proto.labValue2_i = function () {
		var t = new eui.Label();
		this.labValue2 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 144;
		t.y = 65;
		return t;
	};
	_proto.labValue3_i = function () {
		var t = new eui.Label();
		this.labValue3 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "25";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 210;
		t.y = 65;
		return t;
	};
	_proto.labValue4_i = function () {
		var t = new eui.Label();
		this.labValue4 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 275;
		t.y = 65;
		return t;
	};
	_proto.labValue5_i = function () {
		var t = new eui.Label();
		this.labValue5 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 340;
		t.y = 65;
		return t;
	};
	_proto.labValue6_i = function () {
		var t = new eui.Label();
		this.labValue6 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "250";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 405;
		t.y = 65;
		return t;
	};
	_proto.labValue7_i = function () {
		var t = new eui.Label();
		this.labValue7 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "500";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 470;
		t.y = 65;
		return t;
	};
	_proto.labValue8_i = function () {
		var t = new eui.Label();
		this.labValue8 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 50;
		t.x = 529.5;
		t.y = 65;
		return t;
	};
	_proto.labValue9_i = function () {
		var t = new eui.Label();
		this.labValue9 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "2000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 50;
		t.x = 595;
		t.y = 65;
		return t;
	};
	_proto.btnSwitcher_i = function () {
		var t = new eui.Image();
		this.btnSwitcher = t;
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.switcher";
		t.width = 20;
		t.x = 610;
		t.y = 9;
		return t;
	};
	_proto.btnRect1_i = function () {
		var t = new eui.Rect();
		this.btnRect1 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.btnRect2_i = function () {
		var t = new eui.Rect();
		this.btnRect2 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 137;
		t.y = 0;
		return t;
	};
	_proto.btnRect3_i = function () {
		var t = new eui.Rect();
		this.btnRect3 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 202;
		t.y = 0;
		return t;
	};
	_proto.btnRect4_i = function () {
		var t = new eui.Rect();
		this.btnRect4 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 267;
		t.y = 0;
		return t;
	};
	_proto.btnRect5_i = function () {
		var t = new eui.Rect();
		this.btnRect5 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 332;
		t.y = 0;
		return t;
	};
	_proto.btnRect6_i = function () {
		var t = new eui.Rect();
		this.btnRect6 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 397;
		t.y = 0;
		return t;
	};
	_proto.btnRect7_i = function () {
		var t = new eui.Rect();
		this.btnRect7 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 462;
		t.y = 0;
		return t;
	};
	_proto.btnRect8_i = function () {
		var t = new eui.Rect();
		this.btnRect8 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 527;
		t.y = 0;
		return t;
	};
	_proto.btnRect9_i = function () {
		var t = new eui.Rect();
		this.btnRect9 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 592;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.x = 160;
		t.y = 530;
		t.elementsContent = [this._Rect4_i(),this.labMinEntry_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 80;
		t.width = 420;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labMinEntry_i = function () {
		var t = new lz.UILabel();
		this.labMinEntry = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 36;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "Entry Fee: ₹ 0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 0;
		t.width = 390;
		return t;
	};
	_proto.btnEnter_i = function () {
		var t = new eui.Button();
		this.btnEnter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "PLAY NOW";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.y = 680;
		t.skinName = AppPoolRummySkin$Skin17;
		return t;
	};
	return AppPoolRummySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/lobby/AppPointRummySkin.exml'] = window.AppPointRummySkin = (function (_super) {
	__extends(AppPointRummySkin, _super);
	var AppPointRummySkin$Skin18 = 	(function (_super) {
		__extends(AppPointRummySkin$Skin18, _super);
		function AppPointRummySkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.btnGreen6_unable")
					])
			];
		}
		var _proto = AppPointRummySkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppPointRummySkin$Skin18;
	})(eui.Skin);

	function AppPointRummySkin() {
		_super.call(this);
		this.skinParts = ["selectBack","labPlayerCount6","labPlayerCount2","labPlayers2","labPlayers6","btnSelect2","btnSelect6","btnJia","btnJian","labValue1","labValue2","labValue3","labValue4","labValue5","labValue6","labValue7","labValue8","labValue9","btnSwitcher","btnRect1","btnRect2","btnRect3","btnRect4","btnRect5","btnRect6","btnRect7","btnRect8","btnRect9","grpSelectEntry","labPointValue","labMinEntry","btnEnter"];
		
		this.height = 810;
		this.width = 720;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = AppPointRummySkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group2_i(),this.grpSelectEntry_i(),this._Group3_i(),this._Group4_i(),this.btnEnter_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 810;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 381;
		t.x = 169.5;
		t.y = 50;
		t.elementsContent = [this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "Select Players";
		t.textColor = 0x000000;
		t.y = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0.5;
		t.width = 280;
		t.y = 50;
		t.elementsContent = [this._Rect2_i(),this.selectBack_i(),this.labPlayerCount6_i(),this.labPlayerCount2_i(),this.labPlayers2_i(),this.labPlayers6_i(),this.btnSelect2_i(),this.btnSelect6_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectBack_i = function () {
		var t = new eui.Rect();
		this.selectBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 135;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.labPlayerCount6_i = function () {
		var t = new eui.Label();
		this.labPlayerCount6 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "6";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 169.5;
		t.y = 17;
		return t;
	};
	_proto.labPlayerCount2_i = function () {
		var t = new eui.Label();
		this.labPlayerCount2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.width = 68;
		t.x = 39.34;
		t.y = 17;
		return t;
	};
	_proto.labPlayers2_i = function () {
		var t = new eui.Label();
		this.labPlayers2 = t;
		t.size = 24;
		t.text = "Players";
		t.textColor = 0x000000;
		t.x = 32;
		t.y = 50;
		return t;
	};
	_proto.labPlayers6_i = function () {
		var t = new eui.Label();
		this.labPlayers6 = t;
		t.size = 24;
		t.text = "Players";
		t.textColor = 0xFFFFFF;
		t.x = 163;
		t.y = 50;
		return t;
	};
	_proto.btnSelect2_i = function () {
		var t = new eui.Rect();
		this.btnSelect2 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnSelect6_i = function () {
		var t = new eui.Rect();
		this.btnSelect6 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 140;
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.grpSelectEntry_i = function () {
		var t = new eui.Group();
		this.grpSelectEntry = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 250;
		t.elementsContent = [this._Image1_i(),this.btnJia_i(),this.btnJian_i(),this.labValue1_i(),this.labValue2_i(),this.labValue3_i(),this.labValue4_i(),this.labValue5_i(),this.labValue6_i(),this.labValue7_i(),this.labValue8_i(),this.labValue9_i(),this.btnSwitcher_i(),this.btnRect1_i(),this.btnRect2_i(),this.btnRect3_i(),this.btnRect4_i(),this.btnRect5_i(),this.btnRect6_i(),this.btnRect7_i(),this.btnRect8_i(),this.btnRect9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.app_value_bar";
		t.width = 660;
		t.y = 17;
		return t;
	};
	_proto.btnJia_i = function () {
		var t = new eui.Image();
		this.btnJia = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.jiahao";
		t.width = 60;
		t.x = 655;
		t.y = 5;
		return t;
	};
	_proto.btnJian_i = function () {
		var t = new eui.Image();
		this.btnJian = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.jianhao";
		t.width = 60;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.labValue1_i = function () {
		var t = new eui.Label();
		this.labValue1 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 80;
		t.y = 65;
		return t;
	};
	_proto.labValue2_i = function () {
		var t = new eui.Label();
		this.labValue2 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.25";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 144;
		t.y = 65;
		return t;
	};
	_proto.labValue3_i = function () {
		var t = new eui.Label();
		this.labValue3 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0.5";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 210;
		t.y = 65;
		return t;
	};
	_proto.labValue4_i = function () {
		var t = new eui.Label();
		this.labValue4 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 275;
		t.y = 65;
		return t;
	};
	_proto.labValue5_i = function () {
		var t = new eui.Label();
		this.labValue5 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 340;
		t.y = 65;
		return t;
	};
	_proto.labValue6_i = function () {
		var t = new eui.Label();
		this.labValue6 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 405;
		t.y = 65;
		return t;
	};
	_proto.labValue7_i = function () {
		var t = new eui.Label();
		this.labValue7 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 470;
		t.y = 65;
		return t;
	};
	_proto.labValue8_i = function () {
		var t = new eui.Label();
		this.labValue8 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 534.5;
		t.y = 65;
		return t;
	};
	_proto.labValue9_i = function () {
		var t = new eui.Label();
		this.labValue9 = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "20";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 40;
		t.x = 600;
		t.y = 65;
		return t;
	};
	_proto.btnSwitcher_i = function () {
		var t = new eui.Image();
		this.btnSwitcher = t;
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.switcher";
		t.width = 20;
		t.x = 610;
		t.y = 9;
		return t;
	};
	_proto.btnRect1_i = function () {
		var t = new eui.Rect();
		this.btnRect1 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.btnRect2_i = function () {
		var t = new eui.Rect();
		this.btnRect2 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 137;
		t.y = 0;
		return t;
	};
	_proto.btnRect3_i = function () {
		var t = new eui.Rect();
		this.btnRect3 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 202;
		t.y = 0;
		return t;
	};
	_proto.btnRect4_i = function () {
		var t = new eui.Rect();
		this.btnRect4 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 267;
		t.y = 0;
		return t;
	};
	_proto.btnRect5_i = function () {
		var t = new eui.Rect();
		this.btnRect5 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 332;
		t.y = 0;
		return t;
	};
	_proto.btnRect6_i = function () {
		var t = new eui.Rect();
		this.btnRect6 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 397;
		t.y = 0;
		return t;
	};
	_proto.btnRect7_i = function () {
		var t = new eui.Rect();
		this.btnRect7 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 462;
		t.y = 0;
		return t;
	};
	_proto.btnRect8_i = function () {
		var t = new eui.Rect();
		this.btnRect8 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 527;
		t.y = 0;
		return t;
	};
	_proto.btnRect9_i = function () {
		var t = new eui.Rect();
		this.btnRect9 = t;
		t.fillAlpha = 0;
		t.height = 90;
		t.width = 56;
		t.x = 592;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.x = 160;
		t.y = 400;
		t.elementsContent = [this._Rect3_i(),this.labPointValue_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 80;
		t.width = 420;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labPointValue_i = function () {
		var t = new lz.UILabel();
		this.labPointValue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 36;
		t.horizontalCenter = -0.5;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "Point Value : ₹ 20000";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 0;
		t.width = 390;
		t.x = 4;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.x = 160;
		t.y = 520;
		t.elementsContent = [this._Rect4_i(),this.labMinEntry_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0x592B0B;
		t.height = 80;
		t.width = 420;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labMinEntry_i = function () {
		var t = new lz.UILabel();
		this.labMinEntry = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 36;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "Entry Fee : ₹ 20000";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 0;
		t.width = 390;
		t.x = 4;
		return t;
	};
	_proto.btnEnter_i = function () {
		var t = new eui.Button();
		this.btnEnter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "PLAY NOW";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 420;
		t.y = 670;
		t.skinName = AppPointRummySkin$Skin18;
		return t;
	};
	return AppPointRummySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/lobby/AppLobbyViewSkin.exml'] = window.AppLobbyViewSkin = (function (_super) {
	__extends(AppLobbyViewSkin, _super);
	function AppLobbyViewSkin() {
		_super.call(this);
		this.skinParts = ["rectCash","labCash","grpCashTab","rectChip","labPractise","grpChipTab","rectTournaments","labTournament","grpTournamentsTab","rectSelect","grpModeSelect","grpTournaments","tab1","tab2","tab3","dealView","poolView","pointView","grpMain","grpLobby"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this.grpLobby_i()];
	}
	var _proto = AppLobbyViewSkin.prototype;

	_proto.grpLobby_i = function () {
		var t = new eui.Group();
		this.grpLobby = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.grpModeSelect_i(),this.grpTournaments_i(),this.grpMain_i()];
		return t;
	};
	_proto.grpModeSelect_i = function () {
		var t = new eui.Group();
		this.grpModeSelect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.grpCashTab_i(),this.grpChipTab_i(),this.grpTournamentsTab_i(),this.rectSelect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.source = "game_json.tabback";
		t.width = 720;
		t.y = 2;
		return t;
	};
	_proto.grpCashTab_i = function () {
		var t = new eui.Group();
		this.grpCashTab = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectCash_i(),this.labCash_i()];
		return t;
	};
	_proto.rectCash_i = function () {
		var t = new eui.Rect();
		this.rectCash = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x95521D;
		t.height = 80;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labCash_i = function () {
		var t = new eui.Label();
		this.labCash = t;
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 13;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "CASH";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 210;
		return t;
	};
	_proto.grpChipTab_i = function () {
		var t = new eui.Group();
		this.grpChipTab = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 240;
		t.y = 0;
		t.elementsContent = [this.rectChip_i(),this.labPractise_i()];
		return t;
	};
	_proto.rectChip_i = function () {
		var t = new eui.Rect();
		this.rectChip = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x44403D;
		t.height = 80;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labPractise_i = function () {
		var t = new eui.Label();
		this.labPractise = t;
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 13;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "PRACTISE";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 210;
		return t;
	};
	_proto.grpTournamentsTab_i = function () {
		var t = new eui.Group();
		this.grpTournamentsTab = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 480;
		t.y = 0;
		t.elementsContent = [this.rectTournaments_i(),this.labTournament_i()];
		return t;
	};
	_proto.rectTournaments_i = function () {
		var t = new eui.Rect();
		this.rectTournaments = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x44403D;
		t.height = 80;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labTournament_i = function () {
		var t = new eui.Label();
		this.labTournament = t;
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 13;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "TOURNAMENTS";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 210;
		return t;
	};
	_proto.rectSelect_i = function () {
		var t = new eui.Rect();
		this.rectSelect = t;
		t.fillColor = 0xfc9436;
		t.height = 6;
		t.width = 240;
		t.x = 0;
		t.y = 71;
		return t;
	};
	_proto.grpTournaments_i = function () {
		var t = new eui.Group();
		this.grpTournaments = t;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.width = 720;
		t.x = 0;
		t.y = 100;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 810;
		t.width = 720;
		t.x = 0;
		t.y = 78;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.text = "Coming Soon....";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 255;
		return t;
	};
	_proto.grpMain_i = function () {
		var t = new eui.Group();
		this.grpMain = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.width = 720;
		t.x = 0;
		t.y = 100;
		t.elementsContent = [this._Group1_i(),this.dealView_i(),this.poolView_i(),this.pointView_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 78;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.tab1_i(),this.tab2_i(),this.tab3_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.height = 77;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.tab";
		t.width = 226;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.tab2";
		t.width = 226;
		t.y = 0;
		return t;
	};
	_proto.tab3_i = function () {
		var t = new eui.Image();
		this.tab3 = t;
		t.height = 77;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.tab2";
		t.width = 226;
		t.x = 488;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "Deal Rummy";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.width = 200;
		t.x = 507;
		t.y = 27;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "Pool Rummy";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.width = 200;
		t.x = 260;
		t.y = 27;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "Point Rummy";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.width = 200;
		t.x = 17;
		t.y = 27;
		return t;
	};
	_proto.dealView_i = function () {
		var t = new AppDealRummyView();
		this.dealView = t;
		t.height = 810;
		t.skinName = "AppDealRummySkin";
		t.width = 720;
		t.x = 0;
		t.y = 78;
		return t;
	};
	_proto.poolView_i = function () {
		var t = new AppPoolRummyView();
		this.poolView = t;
		t.height = 810;
		t.skinName = "AppPoolRummySkin";
		t.width = 720;
		t.x = 0;
		t.y = 78;
		return t;
	};
	_proto.pointView_i = function () {
		var t = new AppPointRummyView();
		this.pointView = t;
		t.height = 810;
		t.skinName = "AppPointRummySkin";
		t.width = 720;
		t.x = 0;
		t.y = 78;
		return t;
	};
	return AppLobbyViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/home/AppHomeSkin.exml'] = window.AppHomeSkin = (function (_super) {
	__extends(AppHomeSkin, _super);
	var AppHomeSkin$Skin19 = 	(function (_super) {
		__extends(AppHomeSkin$Skin19, _super);
		function AppHomeSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppHomeSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "game_json.addcashbtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppHomeSkin$Skin19;
	})(eui.Skin);

	function AppHomeSkin() {
		_super.call(this);
		this.skinParts = ["btnSetting","btnAddCash","btnSelf","labCash","grpCash","labChips","grpGold","labUserName","grpArea","grpHead","chatView","shareView","bonusView","contactView","lobbyView","grpContainer","labMenu1","reddot1","grp1","labMenu2","reddot2","grp2","labMenu3","reddot3","grp3","labMenu4","reddot4","grp4","labMenu5","reddot5","grp5","grpBottom"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.grpHead_i(),this.grpContainer_i(),this.grpBottom_i()];
	}
	var _proto = AppHomeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1482;
		t.source = "app_hall_bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grpHead_i = function () {
		var t = new eui.Group();
		this.grpHead = t;
		t.height = 200;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.btnSetting_i(),this._Image3_i(),this._Image4_i(),this.btnAddCash_i(),this._Image5_i(),this.btnSelf_i(),this.grpCash_i(),this.grpGold_i(),this.labUserName_i(),this.grpArea_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.headback";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Image();
		this.btnSetting = t;
		t.height = 65;
		t.source = "game_json.setting";
		t.width = 65;
		t.x = 630;
		t.y = 20;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 93;
		t.source = "game_json.left";
		t.width = 260;
		t.y = 87;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 93;
		t.source = "game_json.right";
		t.width = 260;
		t.x = 460;
		t.y = 87;
		return t;
	};
	_proto.btnAddCash_i = function () {
		var t = new eui.Button();
		this.btnAddCash = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 85;
		t.skinName = AppHomeSkin$Skin19;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.touxiangkuang";
		t.width = 70;
		t.x = 17;
		t.y = 19;
		return t;
	};
	_proto.btnSelf_i = function () {
		var t = new eui.Image();
		this.btnSelf = t;
		t.height = 65;
		t.width = 65;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grpCash_i = function () {
		var t = new eui.Group();
		this.grpCash = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.x = 520;
		t.y = 115;
		t.elementsContent = [this._Image6_i(),this._Label1_i(),this.labCash_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.source = "game_json.home_money";
		t.verticalCenter = 2.5;
		t.width = 45;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "Cash";
		t.textColor = 0xB5B3B3;
		t.width = 135;
		t.x = 50;
		t.y = 7;
		return t;
	};
	_proto.labCash_i = function () {
		var t = new eui.Label();
		this.labCash = t;
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "10000";
		t.width = 134;
		t.x = 50;
		t.y = 30;
		return t;
	};
	_proto.grpGold_i = function () {
		var t = new eui.Group();
		this.grpGold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 20;
		t.y = 116;
		t.elementsContent = [this._Image7_i(),this._Label2_i(),this.labChips_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.source = "game_json.chips";
		t.verticalCenter = 2.5;
		t.width = 45;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "Practise Chips";
		t.textColor = 0xb5b3b3;
		t.width = 135;
		t.x = 50;
		t.y = 7;
		return t;
	};
	_proto.labChips_i = function () {
		var t = new eui.Label();
		this.labChips = t;
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "10000000";
		t.width = 122;
		t.x = 50;
		t.y = 30;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "game_json.plus";
		t.width = 30;
		t.x = 168;
		t.y = 27;
		return t;
	};
	_proto.labUserName_i = function () {
		var t = new eui.Label();
		this.labUserName = t;
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "UserName";
		t.width = 199;
		t.x = 100;
		t.y = 28;
		return t;
	};
	_proto.grpArea_i = function () {
		var t = new eui.Group();
		this.grpArea = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 250;
		t.x = 320;
		t.y = 10;
		t.elementsContent = [this._Image9_i(),this._Label3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.tipNew";
		t.verticalCenter = 0;
		t.width = 45;
		t.x = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Area of service";
		t.verticalCenter = 0;
		t.x = 57;
		return t;
	};
	_proto.grpContainer_i = function () {
		var t = new eui.Group();
		this.grpContainer = t;
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 200;
		t.elementsContent = [this.chatView_i(),this.shareView_i(),this.bonusView_i(),this.contactView_i(),this.lobbyView_i()];
		return t;
	};
	_proto.chatView_i = function () {
		var t = new ChatView();
		this.chatView = t;
		t.height = 960;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ChatViewSkin";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shareView_i = function () {
		var t = new ShareView();
		this.shareView = t;
		t.height = 960;
		t.skinName = "ShareViewSkin";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bonusView_i = function () {
		var t = new BonusView();
		this.bonusView = t;
		t.height = 960;
		t.skinName = "BonusViewSkin";
		t.width = 720;
		t.y = 0;
		return t;
	};
	_proto.contactView_i = function () {
		var t = new ContactView();
		this.contactView = t;
		t.height = 960;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lobbyView_i = function () {
		var t = new AppLobbyView();
		this.lobbyView = t;
		t.height = 960;
		t.skinName = "AppLobbyViewSkin";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grpBottom_i = function () {
		var t = new eui.Group();
		this.grpBottom = t;
		t.height = 127;
		t.width = 720;
		t.x = 0;
		t.y = 1153;
		t.elementsContent = [this._Image10_i(),this.grp1_i(),this.grp2_i(),this.grp3_i(),this.grp4_i(),this.grp5_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 127;
		t.source = "game_json.footback";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this.labMenu1_i(),this.reddot1_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.horizontalCenter = -4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.1";
		t.width = 74;
		t.y = 40;
		return t;
	};
	_proto.labMenu1_i = function () {
		var t = new eui.Label();
		this.labMenu1 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Contect Us";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 140;
		t.y = 110;
		return t;
	};
	_proto.reddot1_i = function () {
		var t = new eui.Image();
		this.reddot1 = t;
		t.height = 24;
		t.source = "game_json.reddot";
		t.width = 24;
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto.grp2_i = function () {
		var t = new eui.Group();
		this.grp2 = t;
		t.height = 130;
		t.width = 144;
		t.x = 144;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this.labMenu2_i(),this.reddot2_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.2";
		t.width = 74;
		t.y = 40;
		return t;
	};
	_proto.labMenu2_i = function () {
		var t = new eui.Label();
		this.labMenu2 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Bonus";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 140;
		t.y = 110;
		return t;
	};
	_proto.reddot2_i = function () {
		var t = new eui.Image();
		this.reddot2 = t;
		t.height = 24;
		t.source = "game_json.reddot";
		t.width = 24;
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto.grp3_i = function () {
		var t = new eui.Group();
		this.grp3 = t;
		t.height = 130;
		t.width = 144;
		t.x = 288;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this.labMenu3_i(),this.reddot3_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.3";
		t.width = 74;
		t.y = 40;
		return t;
	};
	_proto.labMenu3_i = function () {
		var t = new eui.Label();
		this.labMenu3 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Lobby";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 140;
		t.y = 110;
		return t;
	};
	_proto.reddot3_i = function () {
		var t = new eui.Image();
		this.reddot3 = t;
		t.height = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.reddot";
		t.width = 24;
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto.grp4_i = function () {
		var t = new eui.Group();
		this.grp4 = t;
		t.height = 130;
		t.width = 144;
		t.x = 432;
		t.y = 0;
		t.elementsContent = [this._Image14_i(),this.labMenu4_i(),this.reddot4_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.4";
		t.width = 74;
		t.y = 40;
		return t;
	};
	_proto.labMenu4_i = function () {
		var t = new eui.Label();
		this.labMenu4 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Reffer & Share";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 140;
		t.y = 110;
		return t;
	};
	_proto.reddot4_i = function () {
		var t = new eui.Image();
		this.reddot4 = t;
		t.height = 24;
		t.source = "game_json.reddot";
		t.width = 24;
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto.grp5_i = function () {
		var t = new eui.Group();
		this.grp5 = t;
		t.height = 130;
		t.width = 144;
		t.x = 576;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this.labMenu5_i(),this.reddot5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.5";
		t.width = 74;
		t.y = 40;
		return t;
	};
	_proto.labMenu5_i = function () {
		var t = new eui.Label();
		this.labMenu5 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Menu";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 140;
		t.y = 110;
		return t;
	};
	_proto.reddot5_i = function () {
		var t = new eui.Image();
		this.reddot5 = t;
		t.height = 24;
		t.source = "game_json.reddot";
		t.width = 24;
		t.x = 80;
		t.y = 30;
		return t;
	};
	return AppHomeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/item/BonusItemSkin.exml'] = window.BonusItemSkin = (function (_super) {
	__extends(BonusItemSkin, _super);
	var BonusItemSkin$Skin20 = 	(function (_super) {
		__extends(BonusItemSkin$Skin20, _super);
		function BonusItemSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = BonusItemSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return BonusItemSkin$Skin20;
	})(eui.Skin);

	function BonusItemSkin() {
		_super.call(this);
		this.skinParts = ["backRect","labName","labBonus","btnCollect"];
		
		this.height = 60;
		this.width = 640;
		this.elementsContent = [this.backRect_i(),this.labName_i(),this.labBonus_i(),this.btnCollect_i()];
	}
	var _proto = BonusItemSkin.prototype;

	_proto.backRect_i = function () {
		var t = new eui.Rect();
		this.backRect = t;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 640;
		t.x = 0;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.size = 24;
		t.text = "User12345678";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 15;
		return t;
	};
	_proto.labBonus_i = function () {
		var t = new eui.Label();
		this.labBonus = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "1000000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 115;
		t.x = 335;
		return t;
	};
	_proto.btnCollect_i = function () {
		var t = new eui.Button();
		this.btnCollect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.label = "Collect";
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 519;
		t.skinName = BonusItemSkin$Skin20;
		return t;
	};
	return BonusItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/item/ContactItemSkin.exml'] = window.ContactItemSkin = (function (_super) {
	__extends(ContactItemSkin, _super);
	var ContactItemSkin$Skin21 = 	(function (_super) {
		__extends(ContactItemSkin$Skin21, _super);
		function ContactItemSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = ContactItemSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return ContactItemSkin$Skin21;
	})(eui.Skin);

	function ContactItemSkin() {
		_super.call(this);
		this.skinParts = ["backRect","labName","btnInvite"];
		
		this.height = 60;
		this.width = 640;
		this.elementsContent = [this.backRect_i(),this.labName_i(),this.btnInvite_i(),this._Label1_i()];
	}
	var _proto = ContactItemSkin.prototype;

	_proto.backRect_i = function () {
		var t = new eui.Rect();
		this.backRect = t;
		t.fillAlpha = 1;
		t.fillColor = 0xe0e0e0;
		t.height = 60;
		t.width = 640;
		t.x = 0;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -126.5;
		t.size = 26;
		t.text = "Name";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 337;
		return t;
	};
	_proto.btnInvite_i = function () {
		var t = new eui.Button();
		this.btnInvite = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.label = "Invite";
		t.verticalCenter = 0.5;
		t.width = 120;
		t.x = 503.5;
		t.skinName = ContactItemSkin$Skin21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "100";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 73;
		t.x = 417;
		return t;
	};
	return ContactItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/item/LocationItemSkin.exml'] = window.LocationItemSkin = (function (_super) {
	__extends(LocationItemSkin, _super);
	function LocationItemSkin() {
		_super.call(this);
		this.skinParts = ["rectBack","labLocation"];
		
		this.height = 60;
		this.width = 510;
		this.elementsContent = [this.rectBack_i(),this.labLocation_i()];
	}
	var _proto = LocationItemSkin.prototype;

	_proto.rectBack_i = function () {
		var t = new eui.Rect();
		this.rectBack = t;
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 510;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labLocation_i = function () {
		var t = new eui.Label();
		this.labLocation = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.size = 30;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = 2;
		t.width = 481;
		t.x = 15;
		return t;
	};
	return LocationItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/item/OrderItemSkin.exml'] = window.OrderItemSkin = (function (_super) {
	__extends(OrderItemSkin, _super);
	function OrderItemSkin() {
		_super.call(this);
		this.skinParts = ["backRect","labId","labAmount","labDetail","labDate"];
		
		this.height = 45;
		this.width = 680;
		this.elementsContent = [this.backRect_i(),this.labId_i(),this.labAmount_i(),this.labDetail_i(),this.labDate_i()];
	}
	var _proto = OrderItemSkin.prototype;

	_proto.backRect_i = function () {
		var t = new eui.Rect();
		this.backRect = t;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.height = 45;
		t.horizontalCenter = 0;
		t.width = 676;
		return t;
	};
	_proto.labId_i = function () {
		var t = new eui.Label();
		this.labId = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "PT22120100001";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 137;
		t.x = 5;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "100000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 168;
		return t;
	};
	_proto.labDetail_i = function () {
		var t = new eui.Label();
		this.labDetail = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "SUCCESS";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0.5;
		t.width = 143;
		t.x = 311;
		return t;
	};
	_proto.labDate_i = function () {
		var t = new eui.Label();
		this.labDate = t;
		t.size = 18;
		t.text = "2022-12-12 12:12:12";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0.5;
		t.x = 496;
		return t;
	};
	return OrderItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/item/TransactionItemSkin.exml'] = window.TransactionItemSkin = (function (_super) {
	__extends(TransactionItemSkin, _super);
	function TransactionItemSkin() {
		_super.call(this);
		this.skinParts = ["backRect","labId","labAmount","labDetail","labDate"];
		
		this.height = 50;
		this.width = 680;
		this.elementsContent = [this.backRect_i(),this.labId_i(),this.labAmount_i(),this.labDetail_i(),this.labDate_i()];
	}
	var _proto = TransactionItemSkin.prototype;

	_proto.backRect_i = function () {
		var t = new eui.Rect();
		this.backRect = t;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.height = 50;
		t.width = 680;
		t.x = 0;
		return t;
	};
	_proto.labId_i = function () {
		var t = new eui.Label();
		this.labId = t;
		t.anchorOffsetX = 80;
		t.size = 18;
		t.text = "PT22120100001";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 160;
		t.x = 80;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 45;
		t.size = 18;
		t.text = "100000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 205;
		return t;
	};
	_proto.labDetail_i = function () {
		var t = new eui.Label();
		this.labDetail = t;
		t.anchorOffsetX = 125;
		t.size = 18;
		t.text = "Win a game and get bonus";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 375;
		return t;
	};
	_proto.labDate_i = function () {
		var t = new eui.Label();
		this.labDate = t;
		t.anchorOffsetX = 90;
		t.right = 0;
		t.size = 18;
		t.text = "2022-12-12 12:12:12";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 180;
		return t;
	};
	return TransactionItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/loading/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["imgLoading"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.imgLoading_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgLoading_i = function () {
		var t = new eui.Image();
		this.imgLoading = t;
		t.height = 68;
		t.horizontalCenter = 0;
		t.source = "loading_json.loading_icon";
		t.verticalCenter = 0;
		t.width = 68;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/loading/LoadingViewSkin.exml'] = window.LoadingViewSkin = (function (_super) {
	__extends(LoadingViewSkin, _super);
	var LoadingViewSkin$Skin22 = 	(function (_super) {
		__extends(LoadingViewSkin$Skin22, _super);
		function LoadingViewSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoadingViewSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoadingViewSkin$Skin22;
	})(eui.Skin);

	function LoadingViewSkin() {
		_super.call(this);
		this.skinParts = ["labNotice","imgNotice","btnUpgrade","grpUpgrade"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.grpUpgrade_i()];
	}
	var _proto = LoadingViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "loading_json.appLogin";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 276;
		t.horizontalCenter = 0;
		t.source = "loading_json.jaldirummylogo";
		t.width = 720;
		t.y = 180;
		return t;
	};
	_proto.grpUpgrade_i = function () {
		var t = new eui.Group();
		this.grpUpgrade = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 500;
		t.elementsContent = [this._Rect1_i(),this.labNotice_i(),this.imgNotice_i(),this.btnUpgrade_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 350;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 0;
		return t;
	};
	_proto.labNotice_i = function () {
		var t = new eui.Label();
		this.labNotice = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.lineSpacing = 10;
		t.text = "The app encountered an error and needs to be restarted";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 600;
		t.wordWrap = true;
		t.x = 0;
		t.y = 140;
		return t;
	};
	_proto.imgNotice_i = function () {
		var t = new eui.Image();
		this.imgNotice = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.source = "loading_json.upgrade_icon";
		t.width = 150;
		t.y = -50;
		return t;
	};
	_proto.btnUpgrade_i = function () {
		var t = new eui.Button();
		this.btnUpgrade = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "Upgrade Now";
		t.width = 280;
		t.y = 245;
		t.skinName = LoadingViewSkin$Skin22;
		return t;
	};
	return LoadingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/login/AppLoginSkin.exml'] = window.AppLoginSkin = (function (_super) {
	__extends(AppLoginSkin, _super);
	var AppLoginSkin$Skin23 = 	(function (_super) {
		__extends(AppLoginSkin$Skin23, _super);
		function AppLoginSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppLoginSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = 0;
			return t;
		};
		return AppLoginSkin$Skin23;
	})(eui.Skin);

	var AppLoginSkin$Skin24 = 	(function (_super) {
		__extends(AppLoginSkin$Skin24, _super);
		function AppLoginSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppLoginSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppLoginSkin$Skin24;
	})(eui.Skin);

	var AppLoginSkin$Skin25 = 	(function (_super) {
		__extends(AppLoginSkin$Skin25, _super);
		function AppLoginSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppLoginSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppLoginSkin$Skin25;
	})(eui.Skin);

	function AppLoginSkin() {
		_super.call(this);
		this.skinParts = ["inputMobile","btnSend","inputOTP","btnMobileLogin","btnFBLogin","btnGoogleLogin","btnLogin","rectBack","imgTriangle","labLocation","grpSelectLocation","dataList","grpLocation","labVersion"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.btnFBLogin_i(),this.btnGoogleLogin_i(),this.btnLogin_i(),this._Label2_i(),this.rectBack_i(),this.grpSelectLocation_i(),this.grpLocation_i(),this.labVersion_i()];
	}
	var _proto = AppLoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "loading_json.appLogin";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 267;
		t.horizontalCenter = 0;
		t.source = "loading_json.jaldirummylogo";
		t.width = 720;
		t.y = 64;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 340;
		t.horizontalCenter = 0;
		t.width = 580;
		t.y = 503;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this.inputMobile_i(),this._Label1_i(),this.btnSend_i(),this._Rect4_i(),this.inputOTP_i(),this.btnMobileLogin_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xd6d4d4;
		t.height = 340;
		t.width = 580;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 85;
		t.x = 32.5;
		t.y = 40;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 250;
		t.x = 135;
		t.y = 40;
		return t;
	};
	_proto.inputMobile_i = function () {
		var t = new eui.EditableText();
		this.inputMobile = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.maxChars = 11;
		t.prompt = "Mobile Number";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 152;
		t.y = 46;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+91";
		t.textColor = 0x000000;
		t.x = 48;
		t.y = 62;
		return t;
	};
	_proto.btnSend_i = function () {
		var t = new eui.Button();
		this.btnSend = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "Send";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 140;
		t.x = 406;
		t.y = 46;
		t.skinName = AppLoginSkin$Skin23;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 516;
		t.x = 31;
		t.y = 140;
		return t;
	};
	_proto.inputOTP_i = function () {
		var t = new eui.EditableText();
		this.inputOTP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.maxChars = 6;
		t.prompt = "Enter OTP";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 475;
		t.x = 51;
		t.y = 147;
		return t;
	};
	_proto.btnMobileLogin_i = function () {
		var t = new eui.Button();
		this.btnMobileLogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0.5;
		t.label = "Login As OTP";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 315;
		t.y = 240;
		t.skinName = AppLoginSkin$Skin24;
		return t;
	};
	_proto.btnFBLogin_i = function () {
		var t = new eui.Image();
		this.btnFBLogin = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "loading_json.fb_login";
		t.width = 516;
		t.y = 900;
		return t;
	};
	_proto.btnGoogleLogin_i = function () {
		var t = new eui.Image();
		this.btnGoogleLogin = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "loading_json.googl_login";
		t.width = 516;
		t.y = 1015;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new eui.Button();
		this.btnLogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.label = "Login  As  Guest";
		t.width = 399;
		t.y = 1148;
		t.skinName = AppLoginSkin$Skin25;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "Select your location:";
		t.x = 104;
		t.y = 335;
		return t;
	};
	_proto.rectBack_i = function () {
		var t = new eui.Rect();
		this.rectBack = t;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 1280;
		t.strokeAlpha = 1;
		t.width = 720;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.grpSelectLocation_i = function () {
		var t = new eui.Group();
		this.grpSelectLocation = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 510;
		t.y = 370;
		t.elementsContent = [this._Rect5_i(),this.imgTriangle_i(),this.labLocation_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 510;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.imgTriangle_i = function () {
		var t = new eui.Image();
		this.imgTriangle = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_json.triangle";
		t.verticalCenter = 0.5;
		t.width = 30;
		t.x = 460;
		return t;
	};
	_proto.labLocation_i = function () {
		var t = new eui.Label();
		this.labLocation = t;
		t.anchorOffsetX = 0;
		t.size = 30;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = 2.5;
		t.width = 405;
		t.x = 25;
		return t;
	};
	_proto.grpLocation_i = function () {
		var t = new eui.Group();
		this.grpLocation = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.width = 510;
		t.x = 105;
		t.y = 452;
		t.elementsContent = [this._Rect6_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 460;
		t.width = 510;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 460;
		t.width = 510;
		t.x = 0;
		t.y = 0;
		t.viewport = this.dataList_i();
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.itemRendererSkinName = LocationItemSkin;
		return t;
	};
	_proto.labVersion_i = function () {
		var t = new eui.Label();
		this.labVersion = t;
		t.size = 22;
		t.text = "Ver：1.10.10";
		t.x = 580;
		t.y = 1250;
		return t;
	};
	return AppLoginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/LoginBonusSkin.exml'] = window.LoginBonusSkin = (function (_super) {
	__extends(LoginBonusSkin, _super);
	var LoginBonusSkin$Skin26 = 	(function (_super) {
		__extends(LoginBonusSkin$Skin26, _super);
		function LoginBonusSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = LoginBonusSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return LoginBonusSkin$Skin26;
	})(eui.Skin);

	var LoginBonusSkin$Skin27 = 	(function (_super) {
		__extends(LoginBonusSkin$Skin27, _super);
		function LoginBonusSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = LoginBonusSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return LoginBonusSkin$Skin27;
	})(eui.Skin);

	var LoginBonusSkin$Skin28 = 	(function (_super) {
		__extends(LoginBonusSkin$Skin28, _super);
		function LoginBonusSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = LoginBonusSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return LoginBonusSkin$Skin28;
	})(eui.Skin);

	var LoginBonusSkin$Skin29 = 	(function (_super) {
		__extends(LoginBonusSkin$Skin29, _super);
		function LoginBonusSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = LoginBonusSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return LoginBonusSkin$Skin29;
	})(eui.Skin);

	var LoginBonusSkin$Skin30 = 	(function (_super) {
		__extends(LoginBonusSkin$Skin30, _super);
		function LoginBonusSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.result_ok_unable")
					])
			];
		}
		var _proto = LoginBonusSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return LoginBonusSkin$Skin30;
	})(eui.Skin);

	function LoginBonusSkin() {
		_super.call(this);
		this.skinParts = ["rectBack","btnCollect1","labTime1","labTime2","btnCollect2","labTime3","btnCollect3","labTime4","btnCollect4","labTime5","btnCollect5","btnClose"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group7_i()];
	}
	var _proto = LoginBonusSkin.prototype;

	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectBack_i(),this._Group6_i(),this.btnClose_i(),this._Label12_i()];
		return t;
	};
	_proto.rectBack_i = function () {
		var t = new eui.Rect();
		this.rectBack = t;
		t.fillAlpha = 0.5;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.width = 640;
		t.x = 42;
		t.y = 453;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 480;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "backgroupd2_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Login Bonus";
		t.y = 11;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.y = 80;
		t.elementsContent = [this._Rect1_i(),this._Label2_i(),this._Label3_i(),this.btnCollect1_i(),this.labTime1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 65;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "1st Collect";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 20;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "₹ 5";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.btnCollect1_i = function () {
		var t = new eui.Button();
		this.btnCollect1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.label = "Collect";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 475;
		t.skinName = LoginBonusSkin$Skin26;
		return t;
	};
	_proto.labTime1_i = function () {
		var t = new eui.Label();
		this.labTime1 = t;
		t.size = 20;
		t.text = "Open after 23 minutes";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.x = 260;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.y = 152;
		t.elementsContent = [this._Rect2_i(),this.labTime2_i(),this._Label4_i(),this._Label5_i(),this.btnCollect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labTime2_i = function () {
		var t = new eui.Label();
		this.labTime2 = t;
		t.size = 20;
		t.text = "Open after 23 minutes";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.x = 260;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "2ed Collect";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 20;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "₹ 5";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.btnCollect2_i = function () {
		var t = new eui.Button();
		this.btnCollect2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.label = "Collect";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 475;
		t.skinName = LoginBonusSkin$Skin27;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.y = 224;
		t.elementsContent = [this._Rect3_i(),this.labTime3_i(),this._Label6_i(),this._Label7_i(),this.btnCollect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labTime3_i = function () {
		var t = new eui.Label();
		this.labTime3 = t;
		t.size = 20;
		t.text = "Open after 23 minutes";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.x = 260;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "3rd Collect";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 20;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "₹ 10";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.btnCollect3_i = function () {
		var t = new eui.Button();
		this.btnCollect3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.label = "Collect";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 477;
		t.skinName = LoginBonusSkin$Skin28;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.y = 296;
		t.elementsContent = [this._Rect4_i(),this.labTime4_i(),this._Label8_i(),this._Label9_i(),this.btnCollect4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labTime4_i = function () {
		var t = new eui.Label();
		this.labTime4 = t;
		t.size = 20;
		t.text = "Open after 23 minutes";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.x = 260;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "4th Collect";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 20;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "₹ 10";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.btnCollect4_i = function () {
		var t = new eui.Button();
		this.btnCollect4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.label = "Collect";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 477;
		t.skinName = LoginBonusSkin$Skin29;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.y = 368;
		t.elementsContent = [this._Rect5_i(),this.labTime5_i(),this._Label10_i(),this._Label11_i(),this.btnCollect5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labTime5_i = function () {
		var t = new eui.Label();
		this.labTime5 = t;
		t.size = 20;
		t.text = "Open after 23 minutes";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.x = 260;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "5th Collect";
		t.textColor = 0x727272;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 20;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 30;
		t.text = "₹ 20";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.btnCollect5_i = function () {
		var t = new eui.Button();
		this.btnCollect5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.label = "Collect";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 477;
		t.skinName = LoginBonusSkin$Skin30;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 65;
		t.source = "game_json.common_close";
		t.width = 65;
		t.x = 620;
		t.y = 450;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "The next bonus needs to be collected after 24 hours";
		t.y = 895;
		return t;
	};
	return LoginBonusSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppAccountSkin.exml'] = window.AppAccountSkin = (function (_super) {
	__extends(AppAccountSkin, _super);
	var AppAccountSkin$Skin31 = 	(function (_super) {
		__extends(AppAccountSkin$Skin31, _super);
		function AppAccountSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppAccountSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return AppAccountSkin$Skin31;
	})(eui.Skin);

	var AppAccountSkin$Skin32 = 	(function (_super) {
		__extends(AppAccountSkin$Skin32, _super);
		function AppAccountSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppAccountSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return AppAccountSkin$Skin32;
	})(eui.Skin);

	function AppAccountSkin() {
		_super.call(this);
		this.skinParts = ["btnReload","labChips","labTotalCash","labCash","labBonusCash","labPayCash","btnAddCash","grpCash"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Rect2_i(),this._Rect3_i(),this._Group1_i(),this.grpCash_i()];
	}
	var _proto = AppAccountSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Account Infomation";
		t.textColor = 0x663300;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 380;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 320;
		t.width = 720;
		t.x = 0;
		t.y = 60;
		t.elementsContent = [this._Image1_i(),this._Label2_i(),this._Label3_i(),this.btnReload_i(),this.labChips_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.chips";
		t.width = 40;
		t.x = 53;
		t.y = 35;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "Practise Chips";
		t.textColor = 0x000000;
		t.x = 122;
		t.y = 42;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Available Chips：";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 120;
		return t;
	};
	_proto.btnReload_i = function () {
		var t = new eui.Button();
		this.btnReload = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "Reload Chips";
		t.width = 180;
		t.x = 50;
		t.y = 190;
		t.skinName = AppAccountSkin$Skin31;
		return t;
	};
	_proto.labChips_i = function () {
		var t = new eui.Label();
		this.labChips = t;
		t.size = 24;
		t.text = "1000000";
		t.textColor = 0x000000;
		t.x = 320;
		t.y = 120;
		return t;
	};
	_proto.grpCash_i = function () {
		var t = new eui.Group();
		this.grpCash = t;
		t.anchorOffsetY = 0;
		t.height = 580;
		t.width = 720;
		t.x = 0;
		t.y = 380;
		t.elementsContent = [this._Image2_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this.labTotalCash_i(),this.labCash_i(),this.labBonusCash_i(),this.labPayCash_i(),this.btnAddCash_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.home_money";
		t.width = 40;
		t.x = 53;
		t.y = 29;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "Cash";
		t.textColor = 0x000000;
		t.x = 118.5;
		t.y = 36;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "Total Balance：";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 100;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "Cash Balance：";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 150;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "Bonus Cash Balance：";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 200;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "In Pay Amount：";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 250;
		return t;
	};
	_proto.labTotalCash_i = function () {
		var t = new eui.Label();
		this.labTotalCash = t;
		t.size = 24;
		t.text = "1000000";
		t.textColor = 0x000000;
		t.x = 320;
		t.y = 100;
		return t;
	};
	_proto.labCash_i = function () {
		var t = new eui.Label();
		this.labCash = t;
		t.size = 24;
		t.text = "1000000";
		t.textColor = 0x000000;
		t.x = 320;
		t.y = 150;
		return t;
	};
	_proto.labBonusCash_i = function () {
		var t = new eui.Label();
		this.labBonusCash = t;
		t.size = 24;
		t.text = "1000000";
		t.textColor = 0x000000;
		t.x = 320;
		t.y = 200;
		return t;
	};
	_proto.labPayCash_i = function () {
		var t = new eui.Label();
		this.labPayCash = t;
		t.size = 24;
		t.text = "1000000";
		t.textColor = 0x000000;
		t.x = 320;
		t.y = 250;
		return t;
	};
	_proto.btnAddCash_i = function () {
		var t = new eui.Button();
		this.btnAddCash = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "Add Cash";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 47;
		t.y = 319;
		t.skinName = AppAccountSkin$Skin32;
		return t;
	};
	return AppAccountSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppKYCSkin.exml'] = window.AppKYCSkin = (function (_super) {
	__extends(AppKYCSkin, _super);
	var AppKYCSkin$Skin33 = 	(function (_super) {
		__extends(AppKYCSkin$Skin33, _super);
		function AppKYCSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppKYCSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.verticalCenter = 0;
			return t;
		};
		return AppKYCSkin$Skin33;
	})(eui.Skin);

	var AppKYCSkin$Skin34 = 	(function (_super) {
		__extends(AppKYCSkin$Skin34, _super);
		function AppKYCSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppKYCSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = 0;
			return t;
		};
		return AppKYCSkin$Skin34;
	})(eui.Skin);

	var AppKYCSkin$Skin35 = 	(function (_super) {
		__extends(AppKYCSkin$Skin35, _super);
		function AppKYCSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppKYCSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen5";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = 0;
			return t;
		};
		return AppKYCSkin$Skin35;
	})(eui.Skin);

	function AppKYCSkin() {
		_super.call(this);
		this.skinParts = ["btnSubmit","btnVerifyMobile","btnVerifyName"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.btnSubmit_i(),this.btnVerifyMobile_i(),this.btnVerifyName_i(),this._Label1_i(),this._Rect2_i(),this._Label2_i(),this._Label3_i(),this._Rect3_i(),this._EditableText1_i(),this._Rect4_i(),this._EditableText2_i()];
	}
	var _proto = AppKYCSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "Submit KYC";
		t.width = 620;
		t.y = 398;
		t.skinName = AppKYCSkin$Skin33;
		return t;
	};
	_proto.btnVerifyMobile_i = function () {
		var t = new eui.Button();
		this.btnVerifyMobile = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "Verify";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 496;
		t.y = 141;
		t.skinName = AppKYCSkin$Skin34;
		return t;
	};
	_proto.btnVerifyName_i = function () {
		var t = new eui.Button();
		this.btnVerifyName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "Verify";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 496;
		t.y = 288;
		t.skinName = AppKYCSkin$Skin35;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "KYC";
		t.textColor = 0x663300;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "Mobile Verification";
		t.textColor = 0x000000;
		t.x = 55;
		t.y = 91;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "KYC Document";
		t.textColor = 0x000000;
		t.x = 55;
		t.y = 248;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeWeight = 2;
		t.width = 400;
		t.x = 57;
		t.y = 141;
		return t;
	};
	_proto._EditableText1_i = function () {
		var t = new eui.EditableText();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.maxChars = 6;
		t.prompt = "Mobile Number";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 353;
		t.x = 74;
		t.y = 158;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeWeight = 2;
		t.width = 400;
		t.x = 55;
		t.y = 288;
		return t;
	};
	_proto._EditableText2_i = function () {
		var t = new eui.EditableText();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.maxChars = 6;
		t.prompt = "Aadhaar Number";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 337;
		t.x = 72;
		t.y = 305;
		return t;
	};
	return AppKYCSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppMenuSkin.exml'] = window.AppMenuSkin = (function (_super) {
	__extends(AppMenuSkin, _super);
	function AppMenuSkin() {
		_super.call(this);
		this.skinParts = ["rectBackground","grpMenuBack","labWithdrawal","grpWithdrawal","headImage","grpUser","grpAccount","labKYC","grpKYC","grpTransaction","grpSchool","grpRule","grpBonus","grpLogout"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = AppMenuSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectBackground_i(),this._Group1_i()];
		return t;
	};
	_proto.rectBackground_i = function () {
		var t = new eui.Rect();
		this.rectBackground = t;
		t.fillAlpha = 0;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 400;
		t.x = 320;
		t.y = 380;
		t.elementsContent = [this.grpMenuBack_i(),this.grpWithdrawal_i(),this.grpUser_i(),this.grpAccount_i(),this.grpKYC_i(),this.grpTransaction_i(),this.grpSchool_i(),this.grpRule_i(),this.grpBonus_i(),this.grpLogout_i()];
		return t;
	};
	_proto.grpMenuBack_i = function () {
		var t = new eui.Group();
		this.grpMenuBack = t;
		t.height = 900;
		t.width = 400;
		t.y = 0;
		return t;
	};
	_proto.grpWithdrawal_i = function () {
		var t = new eui.Group();
		this.grpWithdrawal = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.labWithdrawal_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.menu21";
		t.width = 60;
		t.x = 20;
		t.y = 21;
		return t;
	};
	_proto.labWithdrawal_i = function () {
		var t = new eui.Label();
		this.labWithdrawal = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Withdrawal";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpUser_i = function () {
		var t = new eui.Group();
		this.grpUser = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 100;
		t.elementsContent = [this.headImage_i(),this._Label1_i(),this._Image3_i()];
		return t;
	};
	_proto.headImage_i = function () {
		var t = new eui.Image();
		this.headImage = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.avatar_1";
		t.width = 60;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "User  Infomation";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpAccount_i = function () {
		var t = new eui.Group();
		this.grpAccount = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 200;
		t.elementsContent = [this._Image4_i(),this._Label2_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.menu1";
		t.width = 60;
		t.x = 20;
		t.y = 22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Account";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 27;
		return t;
	};
	_proto.grpKYC_i = function () {
		var t = new eui.Group();
		this.grpKYC = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 300;
		t.elementsContent = [this._Image6_i(),this.labKYC_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.menu21";
		t.width = 60;
		t.x = 20;
		t.y = 21;
		return t;
	};
	_proto.labKYC_i = function () {
		var t = new eui.Label();
		this.labKYC = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "KYC";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpTransaction_i = function () {
		var t = new eui.Group();
		this.grpTransaction = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 400;
		t.elementsContent = [this._Image8_i(),this._Label3_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "game_json.menu22";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 20;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "Transaction";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpSchool_i = function () {
		var t = new eui.Group();
		this.grpSchool = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 500;
		t.elementsContent = [this._Image10_i(),this._Label4_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "game_json.menu31";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 20;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "Rummy School";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpRule_i = function () {
		var t = new eui.Group();
		this.grpRule = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 600;
		t.elementsContent = [this._Image12_i(),this._Label5_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "game_json.menu32";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 20;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "Rummy Rule";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpBonus_i = function () {
		var t = new eui.Group();
		this.grpBonus = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 700;
		t.elementsContent = [this._Image14_i(),this._Label6_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "game_json.menu41";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 20;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "Bonus";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	_proto.grpLogout_i = function () {
		var t = new eui.Group();
		this.grpLogout = t;
		t.height = 100;
		t.width = 400;
		t.x = 0;
		t.y = 800;
		t.elementsContent = [this._Image16_i(),this._Label7_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "game_json.menu42";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 20;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.text = "Logout";
		t.textColor = 0x000000;
		t.x = 100;
		t.y = 35;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.iconNext";
		t.width = 50;
		t.x = 330;
		t.y = 25;
		return t;
	};
	return AppMenuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppRuleSkin.exml'] = window.AppRuleSkin = (function (_super) {
	__extends(AppRuleSkin, _super);
	function AppRuleSkin() {
		_super.call(this);
		this.skinParts = ["grpContent"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Rect2_i(),this._Scroller1_i()];
	}
	var _proto = AppRuleSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Rummy Rule";
		t.textColor = 0x663300;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 860;
		t.scrollPolicyH = "off";
		t.width = 640;
		t.x = 40;
		t.y = 80;
		t.viewport = this.grpContent_i();
		return t;
	};
	_proto.grpContent_i = function () {
		var t = new eui.Group();
		this.grpContent = t;
		t.anchorOffsetY = 0;
		t.height = 860;
		t.width = 640;
		t.x = 0;
		t.y = 242;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 257;
		t.source = "game_json.banner";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return AppRuleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppTransactionSkin.exml'] = window.AppTransactionSkin = (function (_super) {
	__extends(AppTransactionSkin, _super);
	function AppTransactionSkin() {
		_super.call(this);
		this.skinParts = ["labId","labAmount","labDetail","labDate","dataGroup","moveScroll"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Rect2_i(),this._Label2_i(),this._Group1_i()];
	}
	var _proto = AppTransactionSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Transactions";
		t.textColor = 0x663300;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "Transaction History：";
		t.textColor = 0x000000;
		t.x = 43;
		t.y = 80;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.width = 680;
		t.x = 20;
		t.y = 120;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this.labId_i(),this.labAmount_i(),this.labDetail_i(),this.labDate_i(),this.moveScroll_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 810;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x592b0b;
		t.height = 50;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labId_i = function () {
		var t = new eui.Label();
		this.labId = t;
		t.anchorOffsetX = 80;
		t.size = 18;
		t.text = "TransactionId";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = -381;
		t.width = 160;
		t.x = 80;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 45;
		t.size = 18;
		t.text = "Amount";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = -381;
		t.width = 90;
		t.x = 205;
		return t;
	};
	_proto.labDetail_i = function () {
		var t = new eui.Label();
		this.labDetail = t;
		t.anchorOffsetX = 125;
		t.size = 18;
		t.text = "Detail";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = -381;
		t.width = 250;
		t.x = 375;
		return t;
	};
	_proto.labDate_i = function () {
		var t = new eui.Label();
		this.labDate = t;
		t.anchorOffsetX = 90;
		t.size = 18;
		t.text = "DateTime";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = -381;
		t.width = 180;
		t.x = 590;
		return t;
	};
	_proto.moveScroll_i = function () {
		var t = new eui.Scroller();
		this.moveScroll = t;
		t.height = 760;
		t.horizontalCenter = 0;
		t.width = 680;
		t.y = 50;
		t.viewport = this.dataGroup_i();
		return t;
	};
	_proto.dataGroup_i = function () {
		var t = new eui.DataGroup();
		this.dataGroup = t;
		t.height = 760;
		t.itemRendererSkinName = TransactionItemSkin;
		t.width = 680;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	return AppTransactionSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppUserSkin.exml'] = window.AppUserSkin = (function (_super) {
	__extends(AppUserSkin, _super);
	var AppUserSkin$Skin36 = 	(function (_super) {
		__extends(AppUserSkin$Skin36, _super);
		function AppUserSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppUserSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return AppUserSkin$Skin36;
	})(eui.Skin);

	var AppUserSkin$Skin37 = 	(function (_super) {
		__extends(AppUserSkin$Skin37, _super);
		function AppUserSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppUserSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return AppUserSkin$Skin37;
	})(eui.Skin);

	var AppUserSkin$Skin38 = 	(function (_super) {
		__extends(AppUserSkin$Skin38, _super);
		function AppUserSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.btnGreen6_unable")
					])
			];
		}
		var _proto = AppUserSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return AppUserSkin$Skin38;
	})(eui.Skin);

	var AppUserSkin$Skin39 = 	(function (_super) {
		__extends(AppUserSkin$Skin39, _super);
		function AppUserSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.btnGreen6_unable")
					])
			];
		}
		var _proto = AppUserSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.verticalCenter = 0;
			return t;
		};
		return AppUserSkin$Skin39;
	})(eui.Skin);

	var AppUserSkin$Skin40 = 	(function (_super) {
		__extends(AppUserSkin$Skin40, _super);
		function AppUserSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppUserSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = 0;
			return t;
		};
		return AppUserSkin$Skin40;
	})(eui.Skin);

	var AppUserSkin$Skin41 = 	(function (_super) {
		__extends(AppUserSkin$Skin41, _super);
		function AppUserSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppUserSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppUserSkin$Skin41;
	})(eui.Skin);

	function AppUserSkin() {
		_super.call(this);
		this.skinParts = ["textName","btnModifyName","btnModifyMobile","labFacebookId","btnBindFB","btnFBTip","labGoogleId","btnBindGG","headImage","textMobile","grpAvatar","btnModifyAvatar","rectBack1","btnClose","labTitle","labInputTip","textInput","btnModify","grpTextinput"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AppUserSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Rect2_i(),this._Label2_i(),this.textName_i(),this.btnModifyName_i(),this._Label3_i(),this.btnModifyMobile_i(),this._Label4_i(),this.labFacebookId_i(),this.btnBindFB_i(),this.btnFBTip_i(),this._Label5_i(),this.labGoogleId_i(),this.btnBindGG_i(),this._Label6_i(),this.headImage_i(),this.textMobile_i(),this.grpAvatar_i(),this.btnModifyAvatar_i(),this.grpTextinput_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "User Infomation";
		t.textColor = 0x663300;
		t.x = 246;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 40;
		t.y = 57;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "UserName：";
		t.textColor = 0x000000;
		t.x = 40;
		t.y = 90;
		return t;
	};
	_proto.textName_i = function () {
		var t = new eui.Label();
		this.textName = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "User200000";
		t.textColor = 0x000000;
		t.width = 230;
		t.x = 180;
		t.y = 90;
		return t;
	};
	_proto.btnModifyName_i = function () {
		var t = new eui.Button();
		this.btnModifyName = t;
		t.height = 45;
		t.label = "Change";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 420;
		t.y = 80;
		t.skinName = AppUserSkin$Skin36;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Mobile：";
		t.textColor = 0x000000;
		t.x = 40;
		t.y = 155;
		return t;
	};
	_proto.btnModifyMobile_i = function () {
		var t = new eui.Button();
		this.btnModifyMobile = t;
		t.height = 45;
		t.label = "Change";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 420;
		t.y = 145;
		t.skinName = AppUserSkin$Skin37;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Facebook：";
		t.textColor = 0x000000;
		t.x = 40;
		t.y = 220;
		return t;
	};
	_proto.labFacebookId_i = function () {
		var t = new eui.Label();
		this.labFacebookId = t;
		t.height = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "N/A";
		t.textColor = 0x000000;
		t.width = 230;
		t.x = 180;
		t.y = 220;
		return t;
	};
	_proto.btnBindFB_i = function () {
		var t = new eui.Button();
		this.btnBindFB = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "Log In Facebook";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 420;
		t.y = 210;
		t.skinName = AppUserSkin$Skin38;
		return t;
	};
	_proto.btnFBTip_i = function () {
		var t = new eui.Image();
		this.btnFBTip = t;
		t.height = 35;
		t.source = "game_json.tipNew";
		t.width = 35;
		t.x = 637;
		t.y = 215;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Google：";
		t.textColor = 0x000000;
		t.x = 40;
		t.y = 285;
		return t;
	};
	_proto.labGoogleId_i = function () {
		var t = new eui.Label();
		this.labGoogleId = t;
		t.height = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "N/A";
		t.textColor = 0x000000;
		t.width = 230;
		t.x = 180;
		t.y = 285;
		return t;
	};
	_proto.btnBindGG_i = function () {
		var t = new eui.Button();
		this.btnBindGG = t;
		t.anchorOffsetX = 0;
		t.height = 45;
		t.label = "Log In Google";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 420;
		t.y = 275;
		t.skinName = AppUserSkin$Skin39;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Avartar：";
		t.textColor = 0x000000;
		t.x = 40;
		t.y = 350;
		return t;
	};
	_proto.headImage_i = function () {
		var t = new eui.Image();
		this.headImage = t;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.avatar_1";
		t.width = 80;
		t.x = 168;
		t.y = 341;
		return t;
	};
	_proto.textMobile_i = function () {
		var t = new eui.Label();
		this.textMobile = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "1234567890";
		t.textColor = 0x000000;
		t.width = 230;
		t.x = 180;
		t.y = 155;
		return t;
	};
	_proto.grpAvatar_i = function () {
		var t = new eui.Group();
		this.grpAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 405;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 650;
		t.x = 35;
		t.y = 440;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 405;
		t.strokeWeight = 2;
		t.width = 650;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnModifyAvatar_i = function () {
		var t = new eui.Button();
		this.btnModifyAvatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 0.5;
		t.label = "Modify Avatar";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 413;
		t.y = 872;
		t.skinName = AppUserSkin$Skin40;
		return t;
	};
	_proto.grpTextinput_i = function () {
		var t = new eui.Group();
		this.grpTextinput = t;
		t.height = 1000;
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectBack1_i(),this._Rect4_i(),this.btnClose_i(),this._Rect5_i(),this.labTitle_i(),this.labInputTip_i(),this.textInput_i(),this.btnModify_i()];
		return t;
	};
	_proto.rectBack1_i = function () {
		var t = new eui.Rect();
		this.rectBack1 = t;
		t.fillAlpha = 0.7;
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xD6D4D4;
		t.height = 380;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 580;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 60;
		t.source = "game_json.common_close";
		t.width = 60;
		t.x = 610;
		t.y = 288;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xFFFFFF;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeWeight = 2;
		t.width = 400;
		t.y = 436;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.text = "Please input text:";
		t.textColor = 0x000000;
		t.width = 366;
		t.y = 364;
		return t;
	};
	_proto.labInputTip_i = function () {
		var t = new eui.Label();
		this.labInputTip = t;
		t.size = 20;
		t.text = "Text length must with 6-12";
		t.textColor = 0x000000;
		t.x = 177;
		t.y = 514;
		return t;
	};
	_proto.textInput_i = function () {
		var t = new eui.EditableText();
		this.textInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.maxChars = 12;
		t.prompt = "text...";
		t.restrict = "0-9 a-z A-Z";
		t.text = "";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 366;
		t.x = 175;
		t.y = 439;
		return t;
	};
	_proto.btnModify_i = function () {
		var t = new eui.Button();
		this.btnModify = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "Change";
		t.width = 193;
		t.x = 266.5;
		t.y = 587;
		t.skinName = AppUserSkin$Skin41;
		return t;
	};
	return AppUserSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/menu/AppWithdrawSkin.exml'] = window.AppWithdrawSkin = (function (_super) {
	__extends(AppWithdrawSkin, _super);
	function AppWithdrawSkin() {
		_super.call(this);
		this.skinParts = ["labList1","labList2"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Rect2_i(),this.labList1_i(),this.labList2_i()];
	}
	var _proto = AppWithdrawSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "Test";
		t.textColor = 0x663300;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 57;
		return t;
	};
	_proto.labList1_i = function () {
		var t = new eui.Label();
		this.labList1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 321;
		t.size = 14;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 639;
		t.wordWrap = true;
		t.x = 41;
		t.y = 245;
		return t;
	};
	_proto.labList2_i = function () {
		var t = new eui.Label();
		this.labList2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 355;
		t.size = 14;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 639;
		t.wordWrap = true;
		t.x = 40;
		t.y = 617;
		return t;
	};
	return AppWithdrawSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/pay/AppOrderViewSkin.exml'] = window.AppOrderViewSkin = (function (_super) {
	__extends(AppOrderViewSkin, _super);
	function AppOrderViewSkin() {
		_super.call(this);
		this.skinParts = ["labId","labAmount","labDetail","labDate","labNone","dataGroup","btnClose"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Image1_i(),this.btnClose_i(),this._Label1_i(),this._Label2_i(),this._Group2_i()];
	}
	var _proto = AppOrderViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.width = 680;
		t.x = 20;
		t.y = 205;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.labId_i(),this.labAmount_i(),this.labDetail_i(),this.labDate_i(),this.labNone_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 810;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x592B0B;
		t.height = 50;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labId_i = function () {
		var t = new eui.Label();
		this.labId = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "TransactionId";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -381;
		t.width = 137;
		t.x = 6.5;
		return t;
	};
	_proto.labAmount_i = function () {
		var t = new eui.Label();
		this.labAmount = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "Amount";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -381;
		t.width = 80;
		t.x = 164.5;
		return t;
	};
	_proto.labDetail_i = function () {
		var t = new eui.Label();
		this.labDetail = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "Detail";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -381;
		t.width = 218;
		t.x = 278.5;
		return t;
	};
	_proto.labDate_i = function () {
		var t = new eui.Label();
		this.labDate = t;
		t.size = 18;
		t.text = "DateTime";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -381;
		t.x = 554.5;
		return t;
	};
	_proto.labNone_i = function () {
		var t = new eui.Label();
		this.labNone = t;
		t.horizontalCenter = 0;
		t.text = "You haven't invited any orders yet !";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 760;
		t.horizontalCenter = 0;
		t.width = 680;
		t.y = 50;
		t.viewport = this.dataGroup_i();
		return t;
	};
	_proto.dataGroup_i = function () {
		var t = new eui.DataGroup();
		this.dataGroup = t;
		t.height = 760;
		t.itemRendererSkinName = OrderItemSkin;
		t.width = 680;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "game_json.headback";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 70;
		t.source = "game_json.closeNew";
		t.width = 70;
		t.x = 26;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "Add Cash";
		t.width = 377;
		t.x = 120;
		t.y = 31;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "Payment Order List";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 147.63;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.width = 720;
		t.y = 1130;
		t.elementsContent = [this._Rect4_i(),this._Label3_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB7B7B7;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "PAYMENT PARTNERS";
		t.textColor = 0xFFFFFF;
		t.x = 26;
		t.y = 15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay1";
		t.width = 120;
		t.x = 24;
		t.y = 60;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay2";
		t.width = 120;
		t.x = 164;
		t.y = 60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay3";
		t.width = 120;
		t.x = 300;
		t.y = 60;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay4";
		t.width = 120;
		t.x = 430;
		t.y = 60;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay5";
		t.width = 120;
		t.x = 564;
		t.y = 60;
		return t;
	};
	return AppOrderViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/pay/AppPayViewSkin.exml'] = window.AppPayViewSkin = (function (_super) {
	__extends(AppPayViewSkin, _super);
	var AppPayViewSkin$Skin42 = 	(function (_super) {
		__extends(AppPayViewSkin$Skin42, _super);
		function AppPayViewSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppPayViewSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return AppPayViewSkin$Skin42;
	})(eui.Skin);

	var AppPayViewSkin$Skin43 = 	(function (_super) {
		__extends(AppPayViewSkin$Skin43, _super);
		function AppPayViewSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppPayViewSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return AppPayViewSkin$Skin43;
	})(eui.Skin);

	var AppPayViewSkin$Skin44 = 	(function (_super) {
		__extends(AppPayViewSkin$Skin44, _super);
		function AppPayViewSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppPayViewSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return AppPayViewSkin$Skin44;
	})(eui.Skin);

	var AppPayViewSkin$Skin45 = 	(function (_super) {
		__extends(AppPayViewSkin$Skin45, _super);
		function AppPayViewSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppPayViewSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return AppPayViewSkin$Skin45;
	})(eui.Skin);

	var AppPayViewSkin$Skin46 = 	(function (_super) {
		__extends(AppPayViewSkin$Skin46, _super);
		function AppPayViewSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppPayViewSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnPurple";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppPayViewSkin$Skin46;
	})(eui.Skin);

	var AppPayViewSkin$Skin47 = 	(function (_super) {
		__extends(AppPayViewSkin$Skin47, _super);
		function AppPayViewSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppPayViewSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnBlue4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppPayViewSkin$Skin47;
	})(eui.Skin);

	function AppPayViewSkin() {
		_super.call(this);
		this.skinParts = ["btnOrder","btnClose","rect1","payPanel1","rect2","payPanel2","rect3","payPanel3","rect4","payPanel4","inputAmount","payPanel5","cashInfo","btnPhonePEAdd","btnAirpayAdd"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btnOrder_i(),this.btnClose_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.payPanel1_i(),this.payPanel2_i(),this.payPanel3_i(),this.payPanel4_i(),this.payPanel5_i(),this._Rect3_i(),this.cashInfo_i(),this.btnPhonePEAdd_i(),this.btnAirpayAdd_i(),this._Group1_i()];
	}
	var _proto = AppPayViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "game_json.headback";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnOrder_i = function () {
		var t = new eui.Image();
		this.btnOrder = t;
		t.height = 70;
		t.source = "game_json.recordNew";
		t.width = 70;
		t.x = 624;
		t.y = 21;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 70;
		t.source = "game_json.closeNew";
		t.width = 70;
		t.x = 26;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "Add Cash";
		t.width = 377;
		t.x = 120;
		t.y = 31;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "Order";
		t.x = 524.5;
		t.y = 31;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 18;
		t.text = "Attention:  We have stoped offering online rummy games to Andhra Pradesh,Assam,Odisha,Sikkim,Nagaland,Meghalaya,Tamil Nadu and Telangana residents.";
		t.textColor = 0x5e5e5e;
		t.width = 640;
		t.wordWrap = true;
		t.y = 116;
		return t;
	};
	_proto.payPanel1_i = function () {
		var t = new eui.Group();
		this.payPanel1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.width = 300;
		t.x = 40;
		t.y = 190;
		t.elementsContent = [this.rect1_i(),this._Button1_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xc6c0c0;
		t.strokeWeight = 5;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.horizontalCenter = 0.5;
		t.label = "Select";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 259;
		t.y = 160;
		t.skinName = AppPayViewSkin$Skin42;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "₹ 100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 50;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "Get  ₹100  Bonus";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 120;
		return t;
	};
	_proto.payPanel2_i = function () {
		var t = new eui.Group();
		this.payPanel2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.width = 300;
		t.x = 380;
		t.y = 190;
		t.elementsContent = [this.rect2_i(),this._Button2_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xc6c0c0;
		t.strokeWeight = 5;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.horizontalCenter = 0.5;
		t.label = "Select";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 259;
		t.y = 160;
		t.skinName = AppPayViewSkin$Skin43;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "₹ 500";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 50;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Get  ₹550  Bonus";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 120;
		return t;
	};
	_proto.payPanel3_i = function () {
		var t = new eui.Group();
		this.payPanel3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.width = 300;
		t.x = 40;
		t.y = 470;
		t.elementsContent = [this.rect3_i(),this._Button3_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto.rect3_i = function () {
		var t = new eui.Rect();
		this.rect3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xc6c0c0;
		t.strokeWeight = 5;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.horizontalCenter = 0.5;
		t.label = "Select";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 259;
		t.y = 160;
		t.skinName = AppPayViewSkin$Skin44;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "₹ 2000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 50;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Get  ₹2100  Bonus";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 120;
		return t;
	};
	_proto.payPanel4_i = function () {
		var t = new eui.Group();
		this.payPanel4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.width = 300;
		t.x = 380;
		t.y = 470;
		t.elementsContent = [this.rect4_i(),this._Button4_i(),this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto.rect4_i = function () {
		var t = new eui.Rect();
		this.rect4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xc6c0c0;
		t.strokeWeight = 5;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.horizontalCenter = 0.5;
		t.label = "Select";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 259;
		t.y = 160;
		t.skinName = AppPayViewSkin$Skin45;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "₹ 5000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 50;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Get  ₹5250  Bonus";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 120;
		return t;
	};
	_proto.payPanel5_i = function () {
		var t = new eui.Group();
		this.payPanel5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 640;
		t.x = 40;
		t.y = 730;
		t.elementsContent = [this._Rect2_i(),this.inputAmount_i(),this._Label12_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 80;
		t.strokeWeight = 2;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.inputAmount_i = function () {
		var t = new eui.EditableText();
		this.inputAmount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.maxChars = 5;
		t.prompt = "Amount (100-10000)";
		t.restrict = "0-9";
		t.textColor = 0x1E1E1E;
		t.verticalAlign = "middle";
		t.width = 410;
		t.x = 18.5;
		t.y = 15;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "Enter Amount";
		t.textColor = 0x000000;
		t.width = 166;
		t.x = 440;
		t.y = 28;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xcbd664;
		t.height = 80;
		t.width = 640;
		t.x = 41;
		t.y = 830;
		return t;
	};
	_proto.cashInfo_i = function () {
		var t = new eui.Label();
		this.cashInfo = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -4;
		t.text = "₹ 2000   +   ₹ 200   =   ₹ 2200";
		t.textColor = 0x167512;
		t.width = 568;
		t.y = 858;
		return t;
	};
	_proto.btnPhonePEAdd_i = function () {
		var t = new eui.Button();
		this.btnPhonePEAdd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "PhonePE Add Cash";
		t.width = 640;
		t.x = 41;
		t.y = 940;
		t.skinName = AppPayViewSkin$Skin46;
		return t;
	};
	_proto.btnAirpayAdd_i = function () {
		var t = new eui.Button();
		this.btnAirpayAdd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "Airpay Add Cash";
		t.width = 640;
		t.y = 1030;
		t.skinName = AppPayViewSkin$Skin47;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.width = 720;
		t.y = 1130;
		t.elementsContent = [this._Rect4_i(),this._Label13_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xb7b7b7;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.text = "PAYMENT PARTNERS";
		t.textColor = 0xffffff;
		t.x = 26;
		t.y = 15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay1";
		t.width = 120;
		t.x = 24;
		t.y = 60;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay2";
		t.width = 120;
		t.x = 164;
		t.y = 60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay3";
		t.width = 120;
		t.x = 300;
		t.y = 60;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay4";
		t.width = 120;
		t.x = 430;
		t.y = 60;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay5";
		t.width = 120;
		t.x = 564;
		t.y = 60;
		return t;
	};
	return AppPayViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/pay/AppSelectPayViewSkin.exml'] = window.AppSelectPayViewSkin = (function (_super) {
	__extends(AppSelectPayViewSkin, _super);
	var AppSelectPayViewSkin$Skin48 = 	(function (_super) {
		__extends(AppSelectPayViewSkin$Skin48, _super);
		function AppSelectPayViewSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AppSelectPayViewSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.result_ok";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = 0;
			return t;
		};
		return AppSelectPayViewSkin$Skin48;
	})(eui.Skin);

	var AppSelectPayViewSkin$Skin49 = 	(function (_super) {
		__extends(AppSelectPayViewSkin$Skin49, _super);
		function AppSelectPayViewSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","loading_json.btnGreen6_unable")
					])
			];
		}
		var _proto = AppSelectPayViewSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AppSelectPayViewSkin$Skin49;
	})(eui.Skin);

	function AppSelectPayViewSkin() {
		_super.call(this);
		this.skinParts = ["btnClose","labPayInfo","grpAmount","rectBack","grp_UPI_INTENT","grp_UPI_COLLECT","grp_CARD","grp_NET_BANKING","rectBar","grpSelectPay","rectUPIBack","labTips","grpUpiList","btnVerify","inputUPIID","grpVpa","inputCardNumber","inputMM","inputYY","inputCvv","grpCard","grpNetBanking","btnAdd","labPayTip"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btnClose_i(),this._Label1_i(),this.grpAmount_i(),this.grpSelectPay_i(),this.grpUpiList_i(),this.grpVpa_i(),this.grpCard_i(),this.grpNetBanking_i(),this.btnAdd_i(),this.labPayTip_i(),this._Group1_i()];
	}
	var _proto = AppSelectPayViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "game_json.headback";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 70;
		t.source = "game_json.closeNew";
		t.width = 70;
		t.x = 26;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "Add Cash";
		t.width = 377;
		t.x = 120;
		t.y = 31;
		return t;
	};
	_proto.grpAmount_i = function () {
		var t = new eui.Group();
		this.grpAmount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 130;
		t.elementsContent = [this._Rect2_i(),this._Label2_i(),this.labPayInfo_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 90;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "You will get ";
		t.textColor = 0x000000;
		t.x = 20;
		t.y = 14;
		return t;
	};
	_proto.labPayInfo_i = function () {
		var t = new eui.Label();
		this.labPayInfo = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "200 + 200 = 400";
		t.textColor = 0x000000;
		t.width = 581;
		t.x = 30;
		t.y = 50;
		return t;
	};
	_proto.grpSelectPay_i = function () {
		var t = new eui.Group();
		this.grpSelectPay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 240;
		t.elementsContent = [this._Rect3_i(),this.rectBack_i(),this.grp_UPI_INTENT_i(),this.grp_UPI_COLLECT_i(),this.grp_CARD_i(),this.grp_NET_BANKING_i(),this.rectBar_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xd8d6d6;
		t.height = 70;
		t.width = 640;
		t.y = 0;
		return t;
	};
	_proto.rectBack_i = function () {
		var t = new eui.Rect();
		this.rectBack = t;
		t.fillColor = 0xffffff;
		t.height = 70;
		t.strokeColor = 0x444444;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_UPI_INTENT_i = function () {
		var t = new eui.Group();
		this.grp_UPI_INTENT = t;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "UPI";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.grp_UPI_COLLECT_i = function () {
		var t = new eui.Group();
		this.grp_UPI_COLLECT = t;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 160;
		t.y = 0;
		t.elementsContent = [this._Label4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "VPA";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.grp_CARD_i = function () {
		var t = new eui.Group();
		this.grp_CARD = t;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 320;
		t.y = 0;
		t.elementsContent = [this._Label5_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Cards";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 135;
		return t;
	};
	_proto.grp_NET_BANKING_i = function () {
		var t = new eui.Group();
		this.grp_NET_BANKING = t;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 480;
		t.y = 0;
		t.elementsContent = [this._Label6_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "Net Banking";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 135;
		t.wordWrap = true;
		return t;
	};
	_proto.rectBar_i = function () {
		var t = new eui.Rect();
		this.rectBar = t;
		t.fillColor = 0x93462c;
		t.height = 5;
		t.width = 160;
		t.x = 0;
		t.y = 65;
		return t;
	};
	_proto.grpUpiList_i = function () {
		var t = new eui.Group();
		this.grpUpiList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 187;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 330;
		t.elementsContent = [this._Rect4_i(),this.rectUPIBack_i(),this.labTips_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 187;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectUPIBack_i = function () {
		var t = new eui.Rect();
		this.rectUPIBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 110;
		t.strokeColor = 0x408910;
		t.strokeWeight = 2;
		t.width = 110;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.labTips_i = function () {
		var t = new eui.Label();
		this.labTips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "It seems that you do not have any UPI apps installed. Please use any other payment method.";
		t.textColor = 0x000000;
		t.width = 608;
		t.wordWrap = true;
		t.x = 17.5;
		t.y = 20;
		return t;
	};
	_proto.grpVpa_i = function () {
		var t = new eui.Group();
		this.grpVpa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 527;
		t.elementsContent = [this._Rect5_i(),this._Label7_i(),this.btnVerify_i(),this._Rect6_i(),this.inputUPIID_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 180;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "Please enter your UPI ID:";
		t.textColor = 0x000000;
		t.width = 564;
		t.x = 20;
		t.y = 16;
		return t;
	};
	_proto.btnVerify_i = function () {
		var t = new eui.Button();
		this.btnVerify = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.label = "Verify VPA";
		t.width = 167;
		t.x = 438;
		t.y = 110;
		t.skinName = AppSelectPayViewSkin$Skin48;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 45;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 20;
		t.y = 53;
		return t;
	};
	_proto.inputUPIID_i = function () {
		var t = new eui.EditableText();
		this.inputUPIID = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.borderColor = 0x514e4e;
		t.height = 26;
		t.prompt = "UPI ID";
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 545;
		t.x = 33;
		t.y = 64;
		return t;
	};
	_proto.grpCard_i = function () {
		var t = new eui.Group();
		this.grpCard = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 719;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this.inputCardNumber_i(),this._Rect9_i(),this.inputMM_i(),this.inputYY_i(),this._Rect10_i(),this.inputCvv_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 150;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 45;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.inputCardNumber_i = function () {
		var t = new eui.EditableText();
		this.inputCardNumber = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.borderColor = 0x333131;
		t.height = 26;
		t.maxChars = 20;
		t.prompt = "Card Number （Debit/Credit）";
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 568;
		t.x = 33;
		t.y = 31;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 45;
		t.strokeWeight = 2;
		t.width = 270;
		t.x = 20;
		t.y = 84;
		return t;
	};
	_proto.inputMM_i = function () {
		var t = new eui.EditableText();
		this.inputMM = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.borderColor = 0x333131;
		t.height = 26;
		t.maxChars = 2;
		t.prompt = "MM";
		t.restrict = "0-9";
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 70;
		t.x = 33;
		t.y = 95;
		return t;
	};
	_proto.inputYY_i = function () {
		var t = new eui.EditableText();
		this.inputYY = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.borderColor = 0x333131;
		t.height = 26;
		t.maxChars = 2;
		t.prompt = "YY";
		t.restrict = "0-9";
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 70;
		t.x = 139;
		t.y = 95;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 45;
		t.strokeWeight = 2;
		t.width = 270;
		t.x = 350;
		t.y = 84;
		return t;
	};
	_proto.inputCvv_i = function () {
		var t = new eui.EditableText();
		this.inputCvv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.borderColor = 0x333131;
		t.height = 26;
		t.maxChars = 3;
		t.prompt = "CVV";
		t.restrict = "0-9";
		t.size = 26;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 216;
		t.x = 363;
		t.y = 95;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "/";
		t.textColor = 0x000000;
		t.x = 107;
		t.y = 95;
		return t;
	};
	_proto.grpNetBanking_i = function () {
		var t = new eui.Group();
		this.grpNetBanking = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 883;
		t.elementsContent = [this._Rect11_i(),this._Label9_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 80;
		t.width = 640;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "This payment method is currently not supported";
		t.textColor = 0x000000;
		t.x = 15;
		t.y = 20;
		return t;
	};
	_proto.btnAdd_i = function () {
		var t = new eui.Button();
		this.btnAdd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "Add Cash";
		t.width = 640;
		t.x = 41;
		t.y = 1021;
		t.skinName = AppSelectPayViewSkin$Skin49;
		return t;
	};
	_proto.labPayTip_i = function () {
		var t = new eui.Label();
		this.labPayTip = t;
		t.anchorOffsetX = 0;
		t.text = "Pay tips";
		t.textColor = 0x9b9292;
		t.width = 638;
		t.x = 41;
		t.y = 975;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.width = 720;
		t.y = 1130;
		t.elementsContent = [this._Rect12_i(),this._Label10_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xB7B7B7;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.text = "PAYMENT PARTNERS";
		t.textColor = 0xFFFFFF;
		t.x = 26;
		t.y = 15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay1";
		t.width = 120;
		t.x = 24;
		t.y = 60;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay2";
		t.width = 120;
		t.x = 164;
		t.y = 60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay3";
		t.width = 120;
		t.x = 300;
		t.y = 60;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay4";
		t.width = 120;
		t.x = 430;
		t.y = 60;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "game_json.pay5";
		t.width = 120;
		t.x = 564;
		t.y = 60;
		return t;
	};
	return AppSelectPayViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/result/ResultSkin.exml'] = window.ResultSkin = (function (_super) {
	__extends(ResultSkin, _super);
	var ResultSkin$Skin50 = 	(function (_super) {
		__extends(ResultSkin$Skin50, _super);
		function ResultSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","battle_json.BacktoLobby2")
					])
			];
		}
		var _proto = ResultSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_json.BacktoLobby1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return ResultSkin$Skin50;
	})(eui.Skin);

	var ResultSkin$Skin51 = 	(function (_super) {
		__extends(ResultSkin$Skin51, _super);
		function ResultSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","battle_json.nextgame2")
					])
			];
		}
		var _proto = ResultSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_json.nextgame1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.height = 40;
			t.size = 30;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -2;
			t.width = 30;
			t.x = 162;
			return t;
		};
		return ResultSkin$Skin51;
	})(eui.Skin);

	function ResultSkin() {
		_super.call(this);
		this.skinParts = ["imageBack","btnBack","btnNextGame","pUserGroup","labResultTip","labResultValue","labResultTitle","grpResult"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ResultSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.imageBack_i(),this.btnBack_i(),this.btnNextGame_i(),this.pUserGroup_i(),this.labResultTip_i(),this.grpResult_i()];
		return t;
	};
	_proto.imageBack_i = function () {
		var t = new eui.Image();
		this.imageBack = t;
		t.scale9Grid = new egret.Rectangle(38,36,132,129);
		t.source = "battle_json.scoreboard2";
		t.x = 1;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.bottom = 16;
		t.label = "";
		t.width = 204;
		t.x = 80;
		t.skinName = ResultSkin$Skin50;
		return t;
	};
	_proto.btnNextGame_i = function () {
		var t = new eui.Button();
		this.btnNextGame = t;
		t.bottom = 16;
		t.label = "9";
		t.x = 700;
		t.skinName = ResultSkin$Skin51;
		return t;
	};
	_proto.pUserGroup_i = function () {
		var t = new eui.Group();
		this.pUserGroup = t;
		t.anchorOffsetY = 0;
		t.height = 443;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.width = 977;
		t.x = 0;
		t.y = 140;
		return t;
	};
	_proto.labResultTip_i = function () {
		var t = new eui.Label();
		this.labResultTip = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "ResultTip";
		t.textAlign = "center";
		t.width = 975;
		t.x = 0;
		t.y = 593;
		return t;
	};
	_proto.grpResult_i = function () {
		var t = new eui.Group();
		this.grpResult = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0.5;
		t.width = 300;
		t.y = 634;
		t.elementsContent = [this._Rect1_i(),this.labResultValue_i(),this.labResultTitle_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xdddddd;
		t.height = 70;
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labResultValue_i = function () {
		var t = new eui.Label();
		this.labResultValue = t;
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "9999₹ + 99999₹ = 99999₹";
		t.textAlign = "center";
		t.textColor = 0x750000;
		t.verticalCenter = 16;
		t.width = 300;
		return t;
	};
	_proto.labResultTitle_i = function () {
		var t = new eui.Label();
		this.labResultTitle = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Lost Cash";
		t.textAlign = "center";
		t.textColor = 0x750000;
		t.width = 300;
		t.y = 9;
		return t;
	};
	return ResultSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/result/ResultUserSkin.exml'] = window.ResultUserSkin = (function (_super) {
	__extends(ResultUserSkin, _super);
	function ResultUserSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","labName","labResult","labScore","labChips","labTotal","labDeclaring","pCardGroup"];
		
		this.height = 73;
		this.width = 977;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ResultUserSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.imgHead_i(),this.labName_i(),this.labResult_i(),this.labScore_i(),this.labChips_i(),this.labTotal_i(),this._Group1_i()];
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.height = 60;
		t.source = "battle_json.result_head";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 5;
		return t;
	};
	_proto.labName_i = function () {
		var t = new eui.Label();
		this.labName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 60;
		t.size = 20;
		t.text = "User100001";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 102;
		t.x = 70;
		return t;
	};
	_proto.labResult_i = function () {
		var t = new eui.Label();
		this.labResult = t;
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Win";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 100;
		t.x = 176;
		return t;
	};
	_proto.labScore_i = function () {
		var t = new eui.Label();
		this.labScore = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.height = 26;
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 730;
		return t;
	};
	_proto.labChips_i = function () {
		var t = new eui.Label();
		this.labChips = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.height = 26;
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 820;
		return t;
	};
	_proto.labTotal_i = function () {
		var t = new eui.Label();
		this.labTotal = t;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.width = 80;
		t.x = 900;
		t.y = 23;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 72;
		t.width = 450;
		t.x = 280;
		t.elementsContent = [this.labDeclaring_i(),this.pCardGroup_i()];
		return t;
	};
	_proto.labDeclaring_i = function () {
		var t = new eui.Label();
		this.labDeclaring = t;
		t.size = 26;
		t.text = "Declaring...";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto.pCardGroup_i = function () {
		var t = new eui.Group();
		this.pCardGroup = t;
		t.height = 152;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.verticalCenter = 0;
		t.width = 1108;
		return t;
	};
	return ResultUserSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/rule/RuleSkin.exml'] = window.RuleSkin = (function (_super) {
	__extends(RuleSkin, _super);
	var RuleSkin$Skin52 = 	(function (_super) {
		__extends(RuleSkin$Skin52, _super);
		function RuleSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RuleSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_json.common_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RuleSkin$Skin52;
	})(eui.Skin);

	function RuleSkin() {
		_super.call(this);
		this.skinParts = ["btnColse","labTitle","pTextGroup"];
		
		this.height = 540;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = RuleSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.btnColse_i(),this.labTitle_i(),this._Scroller1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 540;
		t.source = "backgroupd2_png";
		t.width = 720;
		t.x = -0.5;
		t.y = 0.5;
		return t;
	};
	_proto.btnColse_i = function () {
		var t = new eui.Button();
		this.btnColse = t;
		t.height = 64;
		t.includeInLayout = false;
		t.label = "";
		t.width = 67;
		t.x = 653;
		t.y = 0;
		t.skinName = RuleSkin$Skin52;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "Point Rummy Rule";
		t.textAlign = "center";
		t.width = 217;
		t.x = 249;
		t.y = 20;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 220;
		t.viewport = this.pTextGroup_i();
		return t;
	};
	_proto.pTextGroup_i = function () {
		var t = new eui.Group();
		this.pTextGroup = t;
		t.anchorOffsetX = 0;
		t.height = 300;
		t.width = 640;
		t.x = -30;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.width = 640;
		t.x = 40;
		t.y = 80;
		t.elementsContent = [this._Rect1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Rect2_i(),this._Label1_i(),this._Image14_i(),this._Rect3_i(),this._Label2_i(),this._Image15_i(),this._Rect4_i(),this._Label3_i(),this._Image16_i(),this._Rect5_i(),this._Label4_i(),this._Image17_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xbfbfbf;
		t.height = 130;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_12_2";
		t.width = 60;
		t.x = 25;
		t.y = 35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "card_13_2";
		t.width = 60;
		t.x = 55;
		t.y = 35;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "card_1_2";
		t.width = 60;
		t.x = 84;
		t.y = 35;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_12_2";
		t.width = 60;
		t.x = 174;
		t.y = 35;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_13_2";
		t.width = 60;
		t.x = 204;
		t.y = 35;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_1_2";
		t.width = 60;
		t.x = 233;
		t.y = 35;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_12_2";
		t.width = 60;
		t.x = 334;
		t.y = 35;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_13_2";
		t.width = 60;
		t.x = 364;
		t.y = 35;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_1_2";
		t.width = 60;
		t.x = 393;
		t.y = 35;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_12_2";
		t.width = 60;
		t.x = 494;
		t.y = 35;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_13_2";
		t.width = 60;
		t.x = 524;
		t.y = 35;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_json.card_1_2";
		t.width = 60;
		t.x = 553;
		t.y = 35;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillAlpha = 0.5;
		t.height = 20;
		t.width = 120;
		t.x = 25;
		t.y = 10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 12;
		t.text = "Pure Sequence";
		t.x = 50.7;
		t.y = 14.03;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "game_json.check2";
		t.width = 20;
		t.x = 25;
		t.y = 10;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillAlpha = 0.5;
		t.height = 20;
		t.width = 120;
		t.x = 174.99;
		t.y = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 12;
		t.text = "Pure Sequence";
		t.x = 200.69;
		t.y = 14.03;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "game_json.check2";
		t.width = 20;
		t.x = 174.99;
		t.y = 10;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillAlpha = 0.5;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 333.65;
		t.y = 9.97;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "Impure Sequence";
		t.textAlign = "center";
		t.width = 97;
		t.x = 354.85;
		t.y = 14;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.check2";
		t.width = 20;
		t.x = 333.65;
		t.y = 9.97;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillAlpha = 0.5;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 493.8;
		t.y = 9.94;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.text = "Valid Set";
		t.textAlign = "center";
		t.width = 90.5;
		t.x = 519.5;
		t.y = 13.97;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.check2";
		t.width = 20;
		t.x = 493.8;
		t.y = 9.94;
		return t;
	};
	return RuleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/setting/AreaViewSkin.exml'] = window.AreaViewSkin = (function (_super) {
	__extends(AreaViewSkin, _super);
	var AreaViewSkin$Skin53 = 	(function (_super) {
		__extends(AreaViewSkin$Skin53, _super);
		function AreaViewSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AreaViewSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_json.common_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AreaViewSkin$Skin53;
	})(eui.Skin);

	function AreaViewSkin() {
		_super.call(this);
		this.skinParts = ["btnColse"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AreaViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.btnColse_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.source = "game_json.tips";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "Service Area";
		t.textAlign = "center";
		t.width = 250;
		t.y = 10;
		return t;
	};
	_proto.btnColse_i = function () {
		var t = new eui.Button();
		this.btnColse = t;
		t.height = 64;
		t.includeInLayout = false;
		t.label = "";
		t.width = 67;
		t.x = 533;
		t.y = 0;
		t.skinName = AreaViewSkin$Skin53;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 30;
		t.text = "Attention:";
		t.width = 130;
		t.wordWrap = true;
		t.x = 35;
		t.y = 80;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 171;
		t.lineSpacing = 5;
		t.size = 28;
		t.text = "We have stoped offering online rummy games to Andhra Pradesh,Assam,Odisha,Sikkim,Nagaland,Meghalaya,Tamil Nadu and Telangana residents.";
		t.textColor = 0xaaaaaa;
		t.width = 468;
		t.wordWrap = true;
		t.x = 60;
		t.y = 125;
		return t;
	};
	return AreaViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/setting/SettingViewSkin.exml'] = window.SettingViewSkin = (function (_super) {
	__extends(SettingViewSkin, _super);
	var SettingViewSkin$Skin54 = 	(function (_super) {
		__extends(SettingViewSkin$Skin54, _super);
		function SettingViewSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingViewSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_json.common_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingViewSkin$Skin54;
	})(eui.Skin);

	function SettingViewSkin() {
		_super.call(this);
		this.skinParts = ["btnColse","btnSound","btnVibration","btnNotification","radio1","grpLanguage1","radio2","grpLanguage2"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SettingViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 349;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.btnColse_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.btnSound_i(),this.btnVibration_i(),this.btnNotification_i(),this.grpLanguage1_i(),this.grpLanguage2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 349;
		t.source = "game_json.tips";
		t.width = 600;
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "Setting";
		t.textAlign = "center";
		t.width = 250;
		t.y = 6;
		return t;
	};
	_proto.btnColse_i = function () {
		var t = new eui.Button();
		this.btnColse = t;
		t.height = 64;
		t.includeInLayout = false;
		t.label = "";
		t.width = 67;
		t.x = 533;
		t.y = 0;
		t.skinName = SettingViewSkin$Skin54;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "Sound:";
		t.width = 126;
		t.x = 35;
		t.y = 85;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "Vibration:";
		t.x = 35;
		t.y = 150;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "Notification:";
		t.x = 35;
		t.y = 215;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "Language:";
		t.x = 333;
		t.y = 85;
		return t;
	};
	_proto.btnSound_i = function () {
		var t = new eui.Image();
		this.btnSound = t;
		t.height = 30;
		t.source = "game_json.s1";
		t.width = 84;
		t.x = 190;
		t.y = 83;
		return t;
	};
	_proto.btnVibration_i = function () {
		var t = new eui.Image();
		this.btnVibration = t;
		t.height = 30;
		t.source = "game_json.s1";
		t.width = 84;
		t.x = 190;
		t.y = 148;
		return t;
	};
	_proto.btnNotification_i = function () {
		var t = new eui.Image();
		this.btnNotification = t;
		t.height = 30;
		t.source = "game_json.s1";
		t.width = 84;
		t.x = 190;
		t.y = 215;
		return t;
	};
	_proto.grpLanguage1_i = function () {
		var t = new eui.Group();
		this.grpLanguage1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 265;
		t.x = 320;
		t.y = 134;
		t.elementsContent = [this._Label6_i(),this.radio1_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "English";
		t.verticalCenter = 0;
		t.width = 181;
		t.x = 70;
		return t;
	};
	_proto.radio1_i = function () {
		var t = new eui.Image();
		this.radio1 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.radio1";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 15;
		return t;
	};
	_proto.grpLanguage2_i = function () {
		var t = new eui.Group();
		this.grpLanguage2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 265;
		t.x = 320;
		t.y = 200;
		t.elementsContent = [this._Label7_i(),this.radio2_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "हिन्दी";
		t.verticalCenter = 0;
		t.width = 158;
		t.x = 70;
		return t;
	};
	_proto.radio2_i = function () {
		var t = new eui.Image();
		this.radio2 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_json.radio2";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 15;
		return t;
	};
	return SettingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/view/share/ContactViewSkin.exml'] = window.ContactViewSkin = (function (_super) {
	__extends(ContactViewSkin, _super);
	var ContactViewSkin$Skin55 = 	(function (_super) {
		__extends(ContactViewSkin$Skin55, _super);
		function ContactViewSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ContactViewSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loading_json.btnGreen6";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ContactViewSkin$Skin55;
	})(eui.Skin);

	function ContactViewSkin() {
		_super.call(this);
		this.skinParts = ["btnOpenShare","labNone","dataGroup"];
		
		this.height = 1000;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ContactViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1000;
		t.width = 720;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this.btnOpenShare_i(),this._Label1_i(),this._Rect2_i(),this._Rect3_i(),this._Label2_i(),this._Label3_i(),this._Rect4_i(),this.labNone_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf2f2f2;
		t.height = 1000;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnOpenShare_i = function () {
		var t = new eui.Button();
		this.btnOpenShare = t;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.horizontalCenter = 0;
		t.label = "Share Bonus";
		t.width = 500;
		t.y = 870;
		t.skinName = ContactViewSkin$Skin55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Invite your friends";
		t.textColor = 0x663300;
		t.x = 219;
		t.y = 21;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x663300;
		t.height = 2;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 40;
		t.y = 57;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x592B0B;
		t.height = 60;
		t.width = 640;
		t.x = 40;
		t.y = 80;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "Name";
		t.x = 81;
		t.y = 99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "Bonus";
		t.x = 472;
		t.y = 99;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 700;
		t.width = 640;
		t.x = 40;
		t.y = 140;
		return t;
	};
	_proto.labNone_i = function () {
		var t = new eui.Label();
		this.labNone = t;
		t.horizontalCenter = 0;
		t.text = "There is no record in your contact list";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.width = 640;
		t.x = 40;
		t.y = 140;
		t.viewport = this.dataGroup_i();
		return t;
	};
	_proto.dataGroup_i = function () {
		var t = new eui.DataGroup();
		this.dataGroup = t;
		t.height = 700;
		t.itemRendererSkinName = ContactItemSkin;
		return t;
	};
	return ContactViewSkin;
})(eui.Skin);