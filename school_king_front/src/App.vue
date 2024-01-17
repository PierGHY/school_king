<template>
    <div>
        <div class="w-full flex justify-end">
            <Button label="Connect" />
        </div>
        <div class="container mx-auto flex flex-col w-9/12 items-center">
            <img src="./assets/logo.png" class="w-[6rem]"/>
            <h1 class="text-4xl text-black dark:text-white font-bold text-center">School King</h1>
            <div class="w-full flex justify-start">
                <Button label="Create a room" />
            </div>
            <div class="card w-full">
                <DataTable :value="rooms" tableStyle="min-width: 50rem">
                    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script setup>
const rooms = [
    { name: 'test', status: 'Online', players: '3'}
]

const columns = [
    { field: 'name', header: 'name'},
    { field: 'status', header: 'status'},
    { field: 'players', header: 'players'},
]
</script>

<style scoped></style>