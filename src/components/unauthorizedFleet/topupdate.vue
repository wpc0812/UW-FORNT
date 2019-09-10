<template>
  <div>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">修改其他车队信息</div>
          </template>
          <el-form
            label-width="170px"
            v-if="flags"
            class="UwMotorcadeMainVOupdate"
            ref="UwMotorcadeMainVO"
            :rules="rules"
            :model="UwMotorcadeMainVO"
          >
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="分公司:" prop="comcode">
                    <el-input v-model="UwMotorcadeMainVO.comcode"
                       type="text"
                      maxlength="8"
                      minlength="8"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人标志:" prop="insuredflag">
                    <el-select v-model="UwMotorcadeMainVO.insuredflag"  :disabled="distorenewal" clearable placeholder="被保险人">
                      <el-option
                        v-for="item in relationss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人名称:" prop="insuredName">
                    <template>
                      <el-input v-model="UwMotorcadeMainVO.insuredName" :disabled="distorenewal">
                      </el-input>
                    </template>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制关系人代码:" prop="insuredCode">
                    <template>
                      <el-input v-model="UwMotorcadeMainVO.insuredCode" :disabled="distorenewal">
                      </el-input>
                    </template>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务来源:" class="text-left" prop="businessNature">
                    <el-select
                      v-model="UwMotorcadeMainVO.businessNature"
                      clearable
                      placeholder="请选择"
                      :disabled="distorenewal"
                    >
                      <el-option
                        v-for="item in carmainmodelvalue"
                        :key="item.labe"
                        :label="item.value"
                        :value="item.label"
                        :disabled="item.disabled"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="历史年度满期赔付率(%):" class="text-left">
                    <a href class="acolor" target="_blank">查询</a>
                    <!-- <el-input v-model="UwMotorcadeMainVO.lastFourYearPayPercent" placeholder="查询"></el-input> -->
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="车队车辆总数:" prop="carcountAll">
                    <el-input v-model="UwMotorcadeMainVO.carcountAll"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="预估保费规模(单位:万元):"
                    prop="estimatedPremiumSize"
                    label-width="175px"
                    class="text-left"
                  >
                    <el-input v-model="UwMotorcadeMainVO.estimatedPremiumSize"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="超分公司权限车辆总数:" prop="uppercarcount" class="text-left">
                    <el-input v-model="UwMotorcadeMainVO.uppercarcount" :disabled="distorenewal"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="超分公司权限车辆种类:" prop="uppercartype">
                    <el-input 
                    v-model="aaaa"
                    placeholder="点击选择"
                    @focus='carCadastralflag1'
                     class="labelmargin"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车队车辆主要车型:" prop="carmainmodel" class="text-left">
                    <el-input 
                    v-model="bbbb"
                    placeholder="点击选择"
                    @focus='carCadastralflag2'
                     class="labelmargin"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车辆主要使用地:" prop="carmainarea" class="text-left">
                    <el-input 
                    v-model="cccc"
                    placeholder="点击选择"
                    @focus='carCadastralflag3'
                     class="labelmargin"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:" prop="finishdate" class="labelheight" :disabled="distorenewal">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.finishdate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险手续费上限(%):" prop="costRateUpper" class="labelheight">
                    <el-input v-model="UwMotorcadeMainVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="监控方案:"  class="labelheight">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="UwMotorcadeMainVO.monitoringProgramme"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="承保条件:" class="labelheight" prop="underWritingCondition">
                     <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="UwMotorcadeMainVO.underWritingCondition"
                    ></el-input>  
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关联关系人名称:" class="labelheight">
                       <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="UwMotorcadeMainVO.insuredNameSUB"
                    ></el-input> 
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="备注:" class="labelheight">
                       <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="UwMotorcadeMainVO.remark"
                    ></el-input> 
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="save()" size="mini" type="primary">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 弹出框 -->
    <el-dialog title="请选择"  class="checkboxmargin" :lock-scroll="false" :visible.sync="carCadastralVisible1" width="40%" :before-close="handleClose1">
          <template>
                <el-transfer 
                v-model="arrays1"
                :props="{key: 'id',label: 'name'}"
                :data="datas1"
                :titles="['未选择', '已选择']"
                @change ="transfer1"
                ></el-transfer>
          </template>
          <span slot="footer" class="dialog-footer">
              <el-button @click="carCadastralVisible1 = false">取 消</el-button>
              <el-button type="primary" @click="valLen1()">确 定</el-button>
          </span>
      </el-dialog>
       <el-dialog title="请选择"  class="checkboxmargin" :lock-scroll="false" :visible.sync="carCadastralVisible2" width="40%" :before-close="handleClose2">
          <template>
                <el-transfer 
                v-model="arrays2"
                :props="{key: 'id',label: 'name'}"
                :data="datas2"
                :titles="['未选择', '已选择']"
                @change ="transfer2"
                ></el-transfer>
          </template>
          <span slot="footer" class="dialog-footer">
              <el-button @click="carCadastralVisible2 = false">取 消</el-button>
              <el-button type="primary" @click="valLen2()">确 定</el-button>
          </span>
      </el-dialog>
       <el-dialog title="请选择"  class="checkboxmargin" :lock-scroll="false" :visible.sync="carCadastralVisible3" width="40%" :before-close="handleClose3">
          <template>
                <el-transfer 
                v-model="arrays3"
                :props="{key: 'id',label: 'name'}"
                :data="datas3"
                :titles="['未选择', '已选择']"
                @change ="transfer3"
                ></el-transfer>
          </template>
          <span slot="footer" class="dialog-footer">
              <el-button @click="carCadastralVisible3 = false">取 消</el-button>
              <el-button type="primary" @click="valLen3()">确 定</el-button>
          </span>
      </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
 
export default {
  name: "torenewal",
  
  data() {
        const generateData1 = _ => {
        const datas1 = [];
        const cars =  ['A01--客车', 'B01--货车', 'B02--半挂牵引车', 'B11--三轮汽车', 'B12--低速货车','B13--自卸货车','A01--客车', 'B01--货车', 'B02--半挂牵引车', 'B11--三轮汽车', 'B12--低速货车','B13--客货两用车','B21--自卸货车', 'B91--货车挂车', 'C01--油罐车', 'C02--气罐车', 'C03--液罐车','C04--冷藏车','C11--罐车挂车', 'C02--推土车', 'C22--清障车', 'C23--清扫车', 'C24--清洁车','C25--起重车','C26--装卸车', 'C27--升降车', 'C28--混凝土搅拌车', 'C29--挖掘车', 'C30--专业拖车','C31--特种车二挂车','C39--特种车二类其他', 'C41--电视转播车', 'C42--消防车', 'C43--医疗车', 'C44--油气田操作用车','C45--压路车','C46--矿山车', 'C47--运钞车', 'C48--救护车', 'C49--检测车', 'C50--雷达车','C51--X光检查车','C52--电信抢修车-电信工程车', 'C53--电信抢修车-电力工程车', 'C54--专业净水车', 'C55--保温车', 'C56--邮电车','C57--警用特种车', 'C58--混凝土泵车', 'C61--特种车三类挂车','C69--特种车三类其他','C90--集装箱拖头', 'D01--摩托车', 'D02--正三轮摩托车', 'E01--拖拉机', 'E11--联合收割机','E12--变型拖拉机-其他','Z99--其他车辆'];
        cars.forEach((car, index) => {
          datas1.push({
            name: car,
            id: index,
          });
        });
        return datas1;
      };
      const generateData2 = _ => {
        const datas2 = [];
        const carModels = ['A01--客车', 'B01--货车', 'B02--半挂牵引车', 'B11--三轮汽车', 'B12--低速货车','B13--自卸货车','A01--客车', 'B01--货车', 'B02--半挂牵引车', 'B11--三轮汽车', 'B12--低速货车','B13--客货两用车','B21--自卸货车', 'B91--货车挂车', 'C01--油罐车', 'C02--气罐车', 'C03--液罐车','C04--冷藏车','C11--罐车挂车', 'C02--推土车', 'C22--清障车', 'C23--清扫车', 'C24--清洁车','C25--起重车','C26--装卸车', 'C27--升降车', 'C28--混凝土搅拌车', 'C29--挖掘车', 'C30--专业拖车','C31--特种车二挂车','C39--特种车二类其他', 'C41--电视转播车', 'C42--消防车', 'C43--医疗车', 'C44--油气田操作用车','C45--压路车','C46--矿山车', 'C47--运钞车', 'C48--救护车', 'C49--检测车', 'C50--雷达车','C51--X光检查车','C52--电信抢修车-电信工程车', 'C53--电信抢修车-电力工程车', 'C54--专业净水车', 'C55--保温车', 'C56--邮电车','C57--警用特种车', 'C58--混凝土泵车', 'C61--特种车三类挂车','C69--特种车三类其他','C90--集装箱拖头', 'D01--摩托车', 'D02--正三轮摩托车', 'E01--拖拉机', 'E11--联合收割机','E12--变型拖拉机-其他','Z99--其他车辆'];
        carModels.forEach((city, index) => {
          datas2.push({
            name: city,
            id: index,
          });
        });
        return datas2;
      };
      const generateData3 = _ => {
        const datas3 = [];
        const cities = ['北京11000000', '天津12000000', '河北13000000', '山西14000000', '內蒙15000000','辽宁21000000','大连21020000', '吉林22000000', '广西45000000', '海南46000000', '上海31000000','上海自贸区分公司31100000','江苏32000000', '浙江33000000', '宁波3302000000','安徽34000000','福建35000000', '厦门35020000', '江西36000000', '山东37000000', '青岛37020000','河南41000000','湖北42000000', '湖南43000000', '广东44000000', '深圳44030000', '重庆50000000','四川51000000','贵州52000000', '云南53000000', '西藏54000000', '陕西61000000', '甘肃62000000','青海63000000','宁夏64000000', '新疆65000000', '黑龙江2300000000','总公司00000000'];
        cities.forEach((city, index) => {
          datas3.push({
            name: city,
            id: index,
          });
        });
        return datas3;
      };
    return {
      arrays1:[],
      arrays2:[],
      arrays3:[],
      aaaa:"",
      bbbb:"",
      cccc:"",
      datas1:generateData1(),
      datas2:generateData2(),
      datas3:generateData3(),
      carCadastralVisible1:false,
      carCadastralVisible2:false,
      carCadastralVisible3:false,
      distorenewal:true,  
      UwMotorcadeMainVO: {
        comcode: "",
        insuredflag: "",
        insuredName: "",
        insuredCode: "",
        businessNature: "",
        carcountAll: "",
        estimatedPremiumSize: "",
        uppercarcount: "",
        uppercartype: "",
        carmainmodel: "",
        carmainarea: "",
        finishdate: "",
        costRateUpper: "",
        underWritingCondition: ""
      },
      relationss: [
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      carmainmodelvalue: [
        { value: "新车车队", label: "1" },
        { value: "转入车队", label: "2" },
        { value: "续保车队", label: "3" ,disabled:true}
      ],
      rules: {
        comcode: [
          { required: true, message: "分公司不能为空", trigger: ["blur"] },
           {
            min: 8,
            max: 8,
            message: "长度为8个字符",
            trigger: ["change", "blur"]
          }
        ],
        insuredflag: [
          { required: true, message: "控制关系人标志必选", trigger: ["change"] }
        ],
        insuredName: [
          { required: true, message: "控制关系人名称必填", trigger: ["blur"] }
        ],
        insuredCode: [
          { required: true, message: "控制关系人代码必选", trigger: ["blur"] }
        ],
        businessNature: [
          { required: true, message: "业务来源必选", trigger: ["change"] }
        ],
        carcountAll: [
          { required: true, message: "车队车辆总数必填", trigger: ["blur"] }
        ],
        estimatedPremiumSize: [
          { required: true, message: "预估保费规模必填", trigger: ["blur"] }
        ],
        uppercarcount: [ 
          // { required: true, message: "超分公司权限车辆总数", trigger: ["blur"] }
        ],
        uppercartype: [
          { required: true, message: "超分公司权限车辆种类", trigger: ["change"] }
        ],
        carmainmodel: [
          { required: true, message: "车队车辆主要车型必选", trigger: ["change"] }
        ],
        carmainarea: [
          { required: true, message: "车辆主要使用地必选", trigger: ["change"] }
        ],
        finishdate: [
          { required: true, message: "控制结束日期必选", trigger: ["change"] }
        ],
        costRateUpper: [
          { required: true, message: "商业险手续费上限必填", trigger: ["blur"] }
        ],
        underWritingCondition: [
          { required: true, message: "承保条件必填", trigger: ["blur"] }
        ],
      },
      activeNames: ["1"],
      UwMoto: [
        { value1: "111", value2: "222" },
        { value1: "666", value2: "222" },
        { value1: "999", value2: "222" },
        { value1: "777", value2: "888" }
      ],

      relations,
      flags: true,
      formData: {},
      types:[]
    };
  },
  computed: {},
  methods: {
    transfer1(value, direction, movedKeys){
      // console.log( value ,movedKeys)
    },
     transfer2(value, direction, movedKeys){
      // console.log( value ,movedKeys)
    },
     transfer3(value, direction, movedKeys){
      // console.log( value ,movedKeys)
    },
    handleClose1: function() {
    this.carCadastralVisible = false;
    },
    handleClose2: function() {
    this.carCadastralVisible = false;
    },
    handleClose3: function() {
    this.carCadastralVisible = false;
    },
    valLen1(){
      this.carCadastralVisible1 = false;
         let b=[];
      let c=[];
      for(let i=0;i<this.arrays1.length+1;i++){
        for(let j=0;j<this.datas1.length;j++){
          if(this.arrays1[i]==this.datas1[j].id){
              c.push(this.datas1[j].name)
              b.push(this.datas1[j].name.substring(0,3))
          }   
        }
      }
      this.aaaa=c.join();
      this.arrays1=b
      this.UwMotorcadeMainVO.uppercartype=this.arrays1.join()
      // console.log(b,c,this.aaaa,this.arrays1,this.UwMotorcadeMainVO.uppercartype)
    },
      valLen2(){
      this.carCadastralVisible2 = false;
         let b=[];
      let c=[];
      for(let i=0;i<this.arrays2.length+1;i++){
        for(let j=0;j<this.datas2.length;j++){
          if(this.arrays2[i]==this.datas2[j].id){
              c.push(this.datas2[j].name)
              b.push(this.datas2[j].name.substring(0,3))
          }
        }
      }
      this.bbbb=c.join();
      this.arrays2=b
      this.UwMotorcadeMainVO.carmainmodel=this.arrays2.join()
      // console.log(b,c,this.bbbb,this.arrays2,this.UwMotorcadeMainVO.carmainmodel)
    },
      valLen3(){
      this.carCadastralVisible3 = false;
         let b=[];
      let c=[];
      for(let i=0;i<this.arrays3.length+1;i++){
        for(let j=0;j<this.datas3.length;j++){
          if(this.arrays3[i]==this.datas3[j].id){
              c.push(this.datas3[j].name)
              b.push(this.datas3[j].name.substring(this.datas3[j].name.length-4,this.datas3[j].name.length-8))
          }
          
        }
      }
      this.cccc=c.join();
      this.arrays3=b
      this.UwMotorcadeMainVO.carmainarea=this.arrays3.join()
      // console.log(b,c,this.bbbb,this.arrays2,this.UwMotorcadeMainVO.carmainarea)
    },
    // 点击弹出
    carCadastralflag1(){
      this.carCadastralVisible1=true
    },
    // 点击弹出
    carCadastralflag2(){
      this.carCadastralVisible2=true
    },
    // 点击弹出
    carCadastralflag3(){
      this.carCadastralVisible3=true
    },
    //保存
    save() {
      this.$refs.UwMotorcadeMainVO.validate(valid => {
        
        if (valid) {
          let uwMotorcadeMainVO=this.UwMotorcadeMainVO
          console.log(this.UwMotorcadeMainVO,valid)
          this.$confirm("确认是否保存该信息~", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$fetch.post(this.HOST + this.$url.carAuditPageUpdate, uwMotorcadeMainVO)
                .then(data => {
                  console.log(data);
                  this.$message({
                    type: "success",
                    message: "保存成功!"
                  });
                });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消保存"
              });
            });
        }
      });
    },
    //通过关系人代码
    selectCode() {
      // this.$router.push({path: '/selectMSg',query:{row:this.UwMotorcadeMainVO.insuredCode}})
      this.$router.push({path: '/selectMSg'})
    },
    //通过关系人代码
    selectName() {
      //  this.$router.push({path: '/selectMSg',query:{row:this.UwMotorcadeMainVO.insuredName}})
      this.$router.push({path: '/selectMSg'})
    },
     init() {
             // 查询详情
      this.$fetch.get(this.HOST + this.$url.rtAddFindMotorcadeMain, {
        params:{motorcadeNo:this.$route.query.motorcadeNo}}
        )
      .then(res=>{
        this.UwMotorcadeMainVO = res
        // this.results = res.uwMotorcadeInfos
        console.log(res);

        // res.uppercartype.
        

      })
    }
  
  },
  created() {
       this.init()


      // let str="1200,1300"
      //   let arr=str.split(",")
      //   //input框显示的名字
      //   let aaas=[]
      //   //初始化页面的值
      //   let bbbs=[]
      //   for(let i=0;i<arr.length;i++){
      //     for(let j=0;j<this.datas1.length;j++){
      //       if(arr[i]==this.datas1[j].name.substring(this.datas1[j].name.length-4,this.datas1[j].name.length-8)){
      //           aaas.push(this.datas1[j].name)
      //         this.aaaa=aaas.join()
      //         bbbs.push(j)
      //         this.arrays = bbbs
      //         //刷新重新渲染（内部函数）
      //         this.$forceUpdate()
      //       }
      //     }
      //   }
      //   console.log(this.Initialize,aaas,this.datas1,this.arrays1)
  }
};
</script>
<style scoped>
/* .el-input--small >>> .el-input__inner {
  height: 25px;
  line-height: 25px;
} */
.peoCode {
  width: 150px;
  float: left;
}
/* .selectCode {
  display: inline-block;
  width: 40px;
  height: 25px;
  margin-top: 3px;
  padding: 2px 2px 0 2px;
} */
.selectCode {
  position: relative;
  left: -22px;
  top: 0px;
}

.el-form >>> label {
  font-size: 12px;
}
/* .UwMotorcadeMainVOupdate >>>.el-input__inner{
  border-radius: 0px;
    } */
.UwMotorcadeMainVOupdate >>> .el-form-item__label {
  background: #e8f6f9;
}
.UwMotorcadeMainVOupdate .el-form-item {
  margin-bottom: 20px;
}
.UwMotorcadeMainVOupdate >>> .text-center {
  margin-top: 20px;
}
.checkboxmargin  >>> .el-checkbox {
  display: inline;
  text-align: left;
}
.checkboxmargin  >>> .el-transfer-panel__header .el-checkbox__label span {
  display: none;
  font-size: 12px;
}
.checkboxmargin  >>> .el-icon-close:before{
    display: none;
}
.checkboxmargin  >>> .el-transfer-panel__item{
  display: block;
}
.labelheight >>> .el-form-item__label,.labelheight >>> .el-input__inner{
  line-height: 50px;
  height: 50px;
}
.checkboxmargin  >>>.el-transfer-panel{
  width: 35%;
}
.checkboxmargin  >>>.el-transfer__buttons{
  padding: 0 10px;
}
.acolor {
  color: #0066cc;
  text-decoration: none;
  margin-left: 13px;
}

</style>
