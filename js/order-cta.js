const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
const orderFormModal = document.querySelector('.order-form-modal')
const orderFormOverlay = document.querySelector('.overlay')

function openOrderForm() {
  orderFormModal.classList.add('is-open')
  orderFormOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderForm)

function closeOrderForm() {
  orderFormModal.classList.remove('is-open')
  orderFormOverlay.classList.remove('is-active')
}

orderFormOverlay.addEventListener('click', closeOrderForm)

function toggleOderCtaBookmark() {
  const [icon, countSpen] = this.children //[아이콘, 카운트 spen]
  const count = Number(countSpen.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    //NOTE : 앞으로 비활성화 // - 1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    //NOTE : 앞으로 활성화 // + 1
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpen.innerHTML = newCount.toLocaleString()
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOderCtaBookmark)