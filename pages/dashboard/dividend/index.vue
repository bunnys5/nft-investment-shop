<template>
  <div>
    <Navbar/>
    <Sidebar/>
  <body>
    <div class="section wf-section">
      <div class="div-block-30">
        <div class="text-block-18">
          <span class="text-span-7">Page / </span>Dividend
        </div>
        <div class="text-block-19">Dividend</div>
      </div>
      <div class="div-block-34">
        <div class="div-block-35">
          <div class="div-block-37">
            <div class="div-block-38">
              <div class="text-block-22">คืนเงินปันผลให้ผู้ลงทุน</div>
            </div>
          </div>
          <div class="div-block-39">
            <div class="card">
          <TreeTable :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25, 50]"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <Column style="backgroundColor: var(--highlight-bg), color: var(--highlight-text-color)" field="pool_name" header="POOL NAME" expander></Column>
            <Column field="size" header="USERS"></Column>
            <Column field="size" header="DATE"></Column>
            <Column field="size" header="ADDRESS"></Column>
            <Column field="size" header="POOL ID"></Column>
            <Column field="size" header="AMOUNT"></Column>
            <Column field="type" header="STATUS"></Column>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
        </TreeTable>
    </div>

          </div>
        </div>
      </div>
    </div>
  </body>

</div>

</template>

<style scoped>
@import url(../../../styles/dividend/dividend.css);
</style>

<script setup lang="ts">
import { ref } from 'vue';

</script>

