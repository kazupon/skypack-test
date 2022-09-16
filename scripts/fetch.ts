import { $fetch } from 'ohmyfetch'

async function main() {
  const url = 'https://cdn.skypack.dev/@kazupon/skypack-test@latest/components/Hello.vue'
  const res = await $fetch<string>(url)
  console.log(res)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})