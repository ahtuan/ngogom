export const useCdn = false

/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

export const dataset = 'production'

export const projectId = '4fd2egjf'

export const readToken =
  'skjd7zF98aEOerJScXDTKDCMZ6Nl1YXmimpmwoibfgpoGHzdBB8lttBafud7FxtsjSSWccyCrrcXrSITr58caODUhfWpdFckXfxFoKPiTQzZD0efA5XtMh1kFG3No1nHV4ow2u9HpQoL1aFQuS78UzIHQRDrt9kzVapA3jfBF6FbzIWVCLnF'

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = '2024-05-04'

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId: `${string}.${string}` = 'preview.secret'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
