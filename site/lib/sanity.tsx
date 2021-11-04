import {
    createImageUrlBuilder,
    createPreviewSubscriptionHook,
} from 'next-sanity'
import { sanityConfig } from './config'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source: string) =>
    imageBuilder.image(source).auto('format').fit('max')

export const usePreviewSubscription = createPreviewSubscriptionHook(
    sanityConfig
)