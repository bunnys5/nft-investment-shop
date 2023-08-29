<template>
  <Navbar />
  <div class="container-1">
    <div class="div-image">
      <img class="banner" src="../../assets/pic/Rectangle-9426.png" alt="" />
    </div>
    <div class="container-2 grid gap-3">
      <div class="col-6">
        <div class="grid row-gap-3">
          <div class="col-12 border-round-md box-bg">
            <div class="block p-3">
              <div
                class="flex w-full justify-content-between align-items-center mb-4"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div
                    class="text-md md:text-xl"
                    style="color: #1a73e7; font-weight: bold"
                  >
                    รายละเอียด
                  </div>
                </div>
                <div style="color: var(--linear-green, #4caf50)">
                  *เป็นผู้ร่วมลงทุน
                </div>
              </div>
              <div class="flex flex-column gap-3 p-2">
                <div class="flex">
                  <div class="text-section text-right">คอลเลกชัน:&nbsp;</div>
                  <div>{{ collectionDetails.name }}</div>
                </div>
                <div class="flex">
                  <div class="text-section min-w-max">เชน:&nbsp;</div>
                  <div>Binance Smart Chain</div>
                </div>
                <div class="flex">
                  <div class="text-section min-w-max">
                    ที่อยู่บล็อกเชน:&nbsp;
                  </div>
                  <div>{{ collectionDetails.smartContract.address }}</div>
                </div>
                <div class="flex">
                  <div class="text-section">ชนิดคอลเลกชัน:&nbsp;</div>
                  <div>{{ collectionDetails.poolType.type_name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 border-round-md box-bg">
            <div class="block p-3">
              <div
                class="flex w-full justify-content-between align-items-center"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div class="text-md md:text-xl" style="color: #fff">
                    ค่าใช่จ่าย
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="grid row-gap-3">
          <div class="col-12 border-round-md box-bg">
            <div class="block p-3">
              <div
                class="flex w-full justify-content-between align-items-center mb-4"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div>การซื้อ</div>
                </div>
              </div>
              <div class="flex flex-column gap-3 p-2">
                <div class="flex justify-content-between">
                  <div>จำนวนเงินที่ลงทุน</div>
                  <div>100</div>
                  <div>บาท</div>
                </div>
                <div class="flex justify-content-between">
                  <div class="min-w-max">จำนวนเงินปันผล</div>
                  <div>100</div>
                  <div>บาท</div>
                </div>
                <div class="flex justify-content-between">
                  <div>จำนวนผู้ลงทุน</div>
                  <div>30</div>
                  <div>คน</div>
                </div>
                <div class="flex justify-content-between">
                  <div>จำนวนเงินทุนทั้งหมด</div>
                  <div>150,000/300,000</div>
                  <div>บาท</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 border-round-md box-bg">
            <div class="block p-3">
              <div
                class="flex w-full justify-content-between align-items-center"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div
                    class="text-md md:text-xl"
                    style="color: var(--linear-light-grey, #a8b8d8)"
                  >
                    รูปแบบสถานะเครื่อง
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="grid">
          <div class="col-12 border-round-md box-bg">
            <div class="block p-3">
              <div
                class="flex w-full justify-content-between align-items-center"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div
                    class="text-md md:text-xl"
                    style="color: var(--linear-light-grey, #a8b8d8)"
                  >
                    สถิติยอดขาย
                  </div>
                  
                </div>
                
              </div>
              <div class="card">
                    <Chart
                      type="line"
                      :data="chartData"
                      :options="chartOptions"
                      class="h-30rem"
                    />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-2"></div>
    <div class="text-2">Devices ทั้งหมด</div>
    <div>
      <Devices />
    </div>
  </div>
  <Footer />
</template>

<style>
@import url(../../styles/collectionsDetails.css);

.text-section {
  color: var(--linear-light-grey, #a8b8d8);
}

body {
  margin: 0;
}

.box-bg {
  background: rgba(255, 255, 255, 0.04);
  font-family: "Prompt";
}
</style>

<script>
import axiosConfig from "~/config/axiosConfig";

export default {
  data() {
    return {
      collectionDetails: {
        name: "",
        cap_price: "",
        max_price: "",
        min_price: "",
        poolType: {
          type_name: "",
        },
        smartContract: {
          address: "",
        },
        status: "",
      },
      devices: null,
      chartData: null,
      chartOptions: null,
    };
  },

  mounted() {
    this.loadPage();
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },

  methods: {
    loadPage: async function () {
      try {
        const route = useRoute();
        var config = {
          method: "get",
          url: `http://localhost:3000/pools/` + route.params.id,
        };
        const responseData = (await axiosConfig(config)).data;
        this.collectionDetails = responseData;
        console.log(responseData);
      } catch (error) {
        console.log("Catch Error", error);
      }
    },
    setChartData() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: documentStyle.getPropertyValue("--blue-500"),
            tension: 0.4,
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: documentStyle.getPropertyValue("--pink-500"),
            tension: 0.4,
          },
        ],
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--text-color-secondary"
      );
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },
  },
};
</script>
