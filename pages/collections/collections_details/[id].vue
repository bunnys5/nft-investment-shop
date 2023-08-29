<template>
  <Navbar />
  <div class="container-1">
    <div class="div-image">
      <img class="banner" src="../../../assets/pic/Rectangle-9426.png" alt="" />
    </div>
    <div class="container-2 grid gap-3">
      <div class="col-6">
        <div class="grid row-gap-3">
          <div class="col-12 border-round-md box-bg">
            <div class="block p-3">
              <div
                class="flex w-full justify-content-between align-items-center"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div class="text-md md:text-xl">รายละเอียด</div>
                </div>
                <div class="">*เป็นผู้ร่วมลงทุน</div>
              </div>
              <div class="flex flex-column gap-3">
                <div class="flex">
                  <div>คอลเลกชัน:</div>
                  <div>Ruay Ruay Ruay</div>
                </div>
                <div class="flex">
                  <div class="min-w-max">คำอธิบาย:</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda, quidem nobis necessitatibus quod aliquid sunt
                    accusantium illo quas magnam, nihil
                  </div>
                </div>
                <div class="flex">
                  <div>เชน:</div>
                  <div>Binance Smart Chain</div>
                </div>
                <div class="flex">
                  <div>ที่อยู่บล็อกเชน:</div>
                  <div>0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c</div>
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
                  <div class="text-md md:text-xl">ค่าใช่จ่าย</div>
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
                class="flex w-full justify-content-between align-items-center"
              >
                <div class="w-max bg-blue-900 p-2 px-4 border-round-md">
                  <div>การซื้อ</div>
                </div>
              </div>
              <div class="flex flex-column gap-3">
                <div class="flex justify-content-between">
                  <div>จำนวนเงินที่ลงทุน:</div>
                  <div>100</div>
                  <div>บาท</div>
                </div>
                <div class="flex justify-content-between">
                  <div class="min-w-max">จำนวนเงินปันผล:</div>
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
                  <div class="text-md md:text-xl">สถานะเครื่อง</div>
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
                  <div class="text-md md:text-xl">สถิติยอดขาย</div>
                </div>
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
@import url(../../../styles/collectionsDetails.css);

body {
  margin: 0;
}

.box-bg {
  background: rgba(255, 255, 255, 0.04);
  font-family: "Prompt";
}
</style>

<script setup></script>
