/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
export default function URLparam(url, param) {
        var urlParams = new URL(url);
        var parameter = urlParams.searchParams.get(param);
        return parameter;
    }