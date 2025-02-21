/*


From here on is not Fractyl's creation and is the hack script code.


*/
const _lastKnownHash = `CiAgCi8qCiAgRWxlbWVudGFsIGNsb25lLCBkZXZlbG9wbWVudCBiZWdhbiAxNSBPY3RvYmVyIDIwMjQKICBJbnNwaXJlZCBieSBDYXJ5IEh1YW5nJ3MgRWxlbWVudGFsIGdhbWVzLCBPcnRlaWwncyBHZW5lc2lzLCBhbmQgc2ltaWxhciBnYW1lcwogIElmIHlvdSdyZSBqdXN0IGxvb2tpbmcgZm9yIGFsbCB0aGUgZWxlbWVudHMgYW5kIGNvbWJpbmF0aW9ucywgdGhleSdyZSBhbGwgaGVyZToKCiAgaHR0cHM6Ly9mcmFjdHlsLm5lb2NpdGllcy5vcmcvZXhwZXJpbWVudHMvZWxlbWVudGFsL2RhdGEudHh0CgoqLwoKdmFyIGQgPSB7CiAgZ2lkOmZ1bmN0aW9uKGlkKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpfSwKICBndG46ZnVuY3Rpb24odG4pe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0bil9LAogIGdjbjpmdW5jdGlvbihjbil7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY24pfSwKICBjZTpmdW5jdGlvbih0YWcpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyl9LAogIHFzOmZ1bmN0aW9uKHFyeSl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXJ5KX0KfQoKdmFyIGVsZW1lbnRzQm94ID0gZC5naWQoJ2VsZW1lbnRzJyk7CnZhciBiYXNpY0VsZW1lbnRzQm94ID0gZC5naWQoJ2Jhc2ljX2VsZW1lbnRzJyk7CnZhciBmaW5hbEVsZW1lbnRzQm94ID0gZC5naWQoJ2ZpbmFsX2VsZW1lbnRzJyk7CnZhciBzZWxlY3RlZERpc3BsYXkgPSBkLmdpZCgnc2VsZWN0ZWQnKTsKdmFyIHJlc3VsdERpc3BsYXkgPSBkLmdpZCgncmVzdWx0Jyk7CnZhciBlbGVtZW50c0Rpc3BsYXkgPSBkLmdpZCgnZWxlbWVudF9jb3VudGVyJyk7Cgp2YXIgYmFzaWNFbGVtZW50cyA9IFsnYWlyJywnZWFydGgnLCdmaXJlJywnd2F0ZXInXTsKdmFyIGNhdGVnb3JpZXMgPSB7fTsKdmFyIGVsZW1lbnRzID0ge307CnZhciBmb3JtdWxhZSA9IFtdOwp2YXIgc2VsZWN0ZWRFbGVtZW50cyA9IFsnJywnJ107CgpmdW5jdGlvbiBmZXRjaERhdGEoKSB7CiAgZmV0Y2goYC4vZGF0YS50eHRgKS50aGVuKGRhdGEgPT4gZGF0YS50ZXh0KCkpLnRoZW4odGV4dCA9PiB7CiAgICB0ZXh0ID0gdGV4dC5zcGxpdCgnKipDQVRFR09SSUVTKipcclxuJylbMV0KICAgIGxldCBmZXRjaGVkQ2F0ZWdvcmllcyA9IHRleHQuc3BsaXQoJ1xyXG4qKkVMRU1FTlRTKipcclxuJylbMF0KICAgIHRleHQgPSB0ZXh0LnNwbGl0KCdcclxuKipFTEVNRU5UUyoqXHJcbicpWzFdCiAgICBsZXQgZmV0Y2hlZEVsZW1lbnRzID0gdGV4dC5zcGxpdCgnXHJcbioqRk9STVVMQUUqKlxyXG4nKVswXQogICAgbGV0IGZldGNoZWRGb3JtdWxhZSA9IHRleHQuc3BsaXQoJ1xyXG4qKkZPUk1VTEFFKipcclxuJylbMV0KICAgIGZldGNoZWRDYXRlZ29yaWVzLnNwbGl0KCdcclxuJykuZm9yRWFjaChjYXRlZ29yeSA9PiB7CiAgICAgIGlmIChjYXRlZ29yeSAhPSAnJykgewogICAgICAgIGNhdGVnb3JpZXNbY2F0ZWdvcnkuc3BsaXQoJ3wnKVswXS50cmltKCldID0ge2NvbG9yOmNhdGVnb3J5LnNwbGl0KCd8JylbMV0udHJpbSgpfQogICAgICB9CiAgICB9KQogICAgZmV0Y2hlZEVsZW1lbnRzLnNwbGl0KCdcclxuJykuZm9yRWFjaChlbGVtZW50ID0+IHsKICAgICAgaWYgKGVsZW1lbnQgIT0gJycpIHsKICAgICAgICBlbGVtZW50c1tlbGVtZW50LnNwbGl0KCd8JylbMF0udHJpbSgpXSA9IHsKICAgICAgICAgIGNhdGVnb3J5OmVsZW1lbnQuc3BsaXQoJ3wnKVsxXS50cmltKCksCiAgICAgICAgICBvd25lZDpiYXNpY0VsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQuc3BsaXQoJ3wnKVswXS50cmltKCkpLAogICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UKICAgICAgICB9CiAgICAgIH0KICAgIH0pCiAgICBmZXRjaGVkRm9ybXVsYWUuc3BsaXQoJ1xyXG4nKS5mb3JFYWNoKGZvcm11bGEgPT4gewogICAgICBpZiAoZm9ybXVsYSAhPSAnJykgewogICAgICAgIGxldCBjb21wb25lbnRzID0gZm9ybXVsYS5zcGxpdCgnPScpWzBdCiAgICAgICAgbGV0IHByb2R1Y3RzID0gZm9ybXVsYS5zcGxpdCgnPScpWzFdCiAgICAgICAgZm9ybXVsYWUucHVzaCh7CiAgICAgICAgICBlbGVtZW50czpjb21wb25lbnRzLnNwbGl0KCcrJykubWFwKGVsZW0gPT4gZWxlbS50cmltKCkpLAogICAgICAgICAgcHJvZHVjdHM6cHJvZHVjdHMuc3BsaXQoJysnKS5tYXAocCA9PiBwLnRyaW0oKSksCiAgICAgICAgfSkKICAgICAgfQogICAgfSkKICAgIHNvcnRFbGVtZW50cygpCiAgICBsb2FkKCkKICAgIHVwZGF0ZVNlbGVjdGVkRGlzcGxheSgpCiAgfSkKfQoKQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHZhbCkgewogIGxldCBpID0gdGhpcy5pbmRleE9mKHZhbCk7CiAgaWYgKGk+LTEpIHt0aGlzLnNwbGljZShpLCAxKTt9CiAgcmV0dXJuIHRoaXM7Cn0KCmZ1bmN0aW9uIHNvcnRFbGVtZW50cygpIHsKICBsZXQga2V5YXJyID0gYmFzaWNFbGVtZW50cy5jb25jYXQoT2JqZWN0LmtleXMoZWxlbWVudHMpLnNvcnQoKS5yZW1vdmUoJ2FpcicpLnJlbW92ZSgnd2F0ZXInKS5yZW1vdmUoJ2ZpcmUnKS5yZW1vdmUoJ2VhcnRoJykpCiAgbGV0IG9sZGVsZW1lbnRzID0gZWxlbWVudHM7CiAgZWxlbWVudHMgPSB7fTsKICBrZXlhcnIuZm9yRWFjaChrZXkgPT4gewogICAgZWxlbWVudHNba2V5XSA9IG9sZGVsZW1lbnRzW2tleV0KICB9KQp9CgpmdW5jdGlvbiB1cGRhdGVFbGVtZW50cygpIHsKICBlbGVtZW50c0JveC5pbm5lckhUTUwgPSAiIgogIGJhc2ljRWxlbWVudHNCb3guaW5uZXJIVE1MID0gIiIKICBmaW5hbEVsZW1lbnRzQm94LmlubmVySFRNTCA9ICIiCiAgdmFyIGVsZW1QcmVzZW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWxlbWVudHMpKQogIE9iamVjdC5rZXlzKGVsZW1QcmVzZW5jZSkuZm9yRWFjaChrZXkgPT4ge2VsZW1QcmVzZW5jZVtrZXldID0gMH0pCiAgT2JqZWN0LmtleXMoZm9ybXVsYWUpLmZvckVhY2goa2V5ID0+IHsKICAgIGxldCBmb3JtdWxhID0gZm9ybXVsYWVba2V5XQogICAgZWxlbVByZXNlbmNlW2Zvcm11bGEuZWxlbWVudHNbMF1dKysKICAgIGlmIChmb3JtdWxhLmVsZW1lbnRzWzBdICE9IGZvcm11bGEuZWxlbWVudHNbMV0pIHtlbGVtUHJlc2VuY2VbZm9ybXVsYS5lbGVtZW50c1sxXV0rK30KICB9KQogIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKGtleSA9PiB7CiAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2tleV0KICAgIGlmIChlbGVtZW50Lm93bmVkKSB7CiAgICAgIGxldCBlbGVtRGl2ID0gZC5jZSgnZGl2JykKICAgICAgZWxlbURpdi5jbGFzc0xpc3QuYWRkKCdlbGVtZW50JykKICAgICAgaWYgKGVsZW1lbnQuc2VsZWN0ZWQpIHtlbGVtRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyl9CiAgICAgIGVsZW1EaXYuaW5uZXJIVE1MID0ga2V5CiAgICAgIGVsZW1EaXYuc3R5bGUgPSBgYmFja2dyb3VuZC1jb2xvcjoke2NhdGVnb3JpZXNbZWxlbWVudC5jYXRlZ29yeV0uY29sb3J9OyBjb2xvcjoke2NvbnRyYXN0Q29sb3IoY2F0ZWdvcmllc1tlbGVtZW50LmNhdGVnb3J5XS5jb2xvcil9O2AKICAgICAgZWxlbURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gewogICAgICAgIHNlbGVjdEVsZW1lbnQoa2V5KQogICAgICB9KQogICAgICBpZiAoYmFzaWNFbGVtZW50cy5pbmNsdWRlcyhrZXkpKSB7YmFzaWNFbGVtZW50c0JveC5hcHBlbmRDaGlsZChlbGVtRGl2KX0KICAgICAgZWxzZSB7CiAgICAgICAgaWYgKGVsZW1QcmVzZW5jZVtrZXldID09IDApIHsKICAgICAgICAgIGlmIChkLmdpZCgnc2VhcmNoX2lucHV0JykudmFsdWUgIT0gJycpIHsKICAgICAgICAgICAgaWYgKGtleS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZC5naWQoJ3NlYXJjaF9pbnB1dCcpLnZhbHVlLnRvVXBwZXJDYXNlKCkpID4gLTEpIHtmaW5hbEVsZW1lbnRzQm94LmFwcGVuZENoaWxkKGVsZW1EaXYpfQogICAgICAgICAgfSBlbHNlIHtmaW5hbEVsZW1lbnRzQm94LmFwcGVuZENoaWxkKGVsZW1EaXYpfQogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBpZiAoZC5naWQoJ3NlYXJjaF9pbnB1dCcpLnZhbHVlICE9ICcnKSB7CiAgICAgICAgICAgIGlmIChrZXkudG9VcHBlckNhc2UoKS5pbmRleE9mKGQuZ2lkKCdzZWFyY2hfaW5wdXQnKS52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+IC0xKSB7ZWxlbWVudHNCb3guYXBwZW5kQ2hpbGQoZWxlbURpdil9CiAgICAgICAgICB9IGVsc2Uge2VsZW1lbnRzQm94LmFwcGVuZENoaWxkKGVsZW1EaXYpfQogICAgICAgIH0KICAgICAgfQogICAgfQogIH0pCn0KCmZ1bmN0aW9uIHNlYXJjaCgpIHt1cGRhdGVFbGVtZW50cygnc2VhcmNoJyl9Cgp2YXIgc3R5bGUgPSAwCnZhciBzdHlsZXMgPSBbCmAuZWxlbWVudCB7CiAgcGFkZGluZzo1cHg7CiB9YCwKICBgLmVsZW1lbnQgewogIHdpZHRoOjU0cHg7CiAgaGVpZ2h0OjU0cHg7CiAgcGFkZGluZzozcHg7CiB9YApdCmZ1bmN0aW9uIHN3aXRjaFN0eWxlKCkgewogIHN0eWxlID0gKHN0eWxlKzEpJTIKICBkb2N1bWVudC5oZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdHlsZScpWzBdLmlubmVySFRNTCA9IHN0eWxlc1tzdHlsZV0KfQoKZnVuY3Rpb24gY29udHJhc3RDb2xvcihjbHIpIHsKICBsZXQgY29sb3IgPSBjbHIuc3BsaXQoJyMnKVsxXS5zcGxpdCgnJykubWFwKHYgPT4gcGFyc2VJbnQodit2LCAxNikpCiAgaWYgKChjb2xvclswXSowLjI5OSkgKyAoY29sb3JbMV0qMC41ODcpICsgKGNvbG9yWzJdKjAuMTE0KSA+IDE4Nikge3JldHVybiAnIzAwMCd9IGVsc2Uge3JldHVybiAnI2ZmZid9Cn0KCmZ1bmN0aW9uIGxvZ1N0YXRzKCkgewogIGNvbnNvbGUubG9nKGBUaGVyZSBhcmUgJHtPYmplY3Qua2V5cyhlbGVtZW50cykubGVuZ3RofSBlbGVtZW50cyBhbmQgJHtPYmplY3Qua2V5cyhmb3JtdWxhZSkubGVuZ3RofSBmb3JtdWxhZS5gKQogIGxldCBsb25nZXN0S2V5cyA9IFsnYSddCiAgbGV0IHNob3J0ZXN0S2V5cyA9IFsnYWFhYWFhYWFhYWFhYWFhYSddCiAgbGV0IGtleXNBbHBoYWJldCA9IE9iamVjdC5rZXlzKGVsZW1lbnRzKS5zb3J0KCkKICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaChrZXkgPT4gewogICAgaWYgKGtleS5sZW5ndGggPiBsb25nZXN0S2V5c1swXS5sZW5ndGgpIHtsb25nZXN0S2V5cyA9IFtrZXldfQogICAgZWxzZSBpZiAoa2V5Lmxlbmd0aCA9PSBsb25nZXN0S2V5c1swXS5sZW5ndGgpIHtsb25nZXN0S2V5cy5wdXNoKGtleSl9CiAgICBpZiAoa2V5Lmxlbmd0aCA8IHNob3J0ZXN0S2V5c1swXS5sZW5ndGgpIHtzaG9ydGVzdEtleXMgPSBba2V5XX0KICAgIGVsc2UgaWYgKGtleS5sZW5ndGggPT0gc2hvcnRlc3RLZXlzWzBdLmxlbmd0aCkge3Nob3J0ZXN0S2V5cy5wdXNoKGtleSl9CiAgfSkKICBjb25zb2xlLmxvZyhgVGhlIGxvbmdlc3QgZWxlbWVudChzKTogJHtsb25nZXN0S2V5cy5qb2luKCcsICcpfSB3aXRoICR7bG9uZ2VzdEtleXNbMF0ubGVuZ3RofSBjaGFyYWN0ZXJzLmApCiAgY29uc29sZS5sb2coYFRoZSBzaG9ydGVzdCBlbGVtZW50KHMpOiAke3Nob3J0ZXN0S2V5cy5qb2luKCcsICcpfSB3aXRoICR7c2hvcnRlc3RLZXlzWzBdLmxlbmd0aH0gY2hhcmFjdGVycy5gKQogIGNvbnNvbGUubG9nKGBGaXJzdCBhbHBoYWJldGljYWxseTogJHtrZXlzQWxwaGFiZXRbMF19IHwgTGFzdCBhbHBoYWJldGljYWxseTogJHtrZXlzQWxwaGFiZXRba2V5c0FscGhhYmV0Lmxlbmd0aC0xXX1gKQogIGxldCBiZXN0RWxlbWVudHMgPSBbJ3JhaW4nXQogIGxldCBiZXN0UHJvZHVjdHMgPSBbJ3JhaW4nXQogIGxldCBlbGVtZW50VHJhY2tpbmcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVsZW1lbnRzKSkKICBsZXQgcHJvZHVjdFRyYWNraW5nID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50cykpCiAgT2JqZWN0LmtleXMoZWxlbWVudFRyYWNraW5nKS5mb3JFYWNoKGtleSA9PiB7ZWxlbWVudFRyYWNraW5nW2tleV0gPSAwfSkKICBPYmplY3Qua2V5cyhwcm9kdWN0VHJhY2tpbmcpLmZvckVhY2goa2V5ID0+IHtwcm9kdWN0VHJhY2tpbmdba2V5XSA9IDB9KQogIE9iamVjdC5rZXlzKGZvcm11bGFlKS5mb3JFYWNoKGtleSA9PiB7CiAgICBsZXQgZm9ybXVsYSA9IGZvcm11bGFlW2tleV0KICAgIGVsZW1lbnRUcmFja2luZ1tmb3JtdWxhLmVsZW1lbnRzWzBdXSsrCiAgICBpZiAoZm9ybXVsYS5lbGVtZW50c1swXSAhPSBmb3JtdWxhLmVsZW1lbnRzWzFdKSB7ZWxlbWVudFRyYWNraW5nW2Zvcm11bGEuZWxlbWVudHNbMV1dKyt9CiAgICBmb3JtdWxhLnByb2R1Y3RzLmZvckVhY2goKGJsYWhibGFoLGkpID0+IHtwcm9kdWN0VHJhY2tpbmdbZm9ybXVsYS5wcm9kdWN0c1tpXV0rKzt9KQogIH0pCiAgT2JqZWN0LmtleXMoZWxlbWVudFRyYWNraW5nKS5mb3JFYWNoKGtleSA9PiB7CiAgICBpZiAoZWxlbWVudFRyYWNraW5nW2tleV0gPiBlbGVtZW50VHJhY2tpbmdbYmVzdEVsZW1lbnRzWzBdXSkge2Jlc3RFbGVtZW50cyA9IFtrZXldfQogICAgZWxzZSBpZiAoZWxlbWVudFRyYWNraW5nW2tleV0gPT0gZWxlbWVudFRyYWNraW5nW2Jlc3RFbGVtZW50c1swXV0pIHtiZXN0RWxlbWVudHMucHVzaChrZXkpfQogIH0pCiAgT2JqZWN0LmtleXMocHJvZHVjdFRyYWNraW5nKS5mb3JFYWNoKGtleSA9PiB7CiAgICBpZiAocHJvZHVjdFRyYWNraW5nW2tleV0gPiBwcm9kdWN0VHJhY2tpbmdbYmVzdFByb2R1Y3RzWzBdXSkge2Jlc3RQcm9kdWN0cyA9IFtrZXldfQogICAgZWxzZSBpZiAocHJvZHVjdFRyYWNraW5nW2tleV0gPT0gcHJvZHVjdFRyYWNraW5nW2Jlc3RQcm9kdWN0c1swXV0pIHtiZXN0UHJvZHVjdHMucHVzaChrZXkpfQogIH0pCiAgY29uc29sZS5sb2coYEJlc3QgZWxlbWVudChzKTogJHtiZXN0RWxlbWVudHMuam9pbignLCAnKX0gdXNlZCBpbiAke2VsZW1lbnRUcmFja2luZ1tiZXN0RWxlbWVudHNbMF1dfSBmb3JtdWxhZWApCiAgY29uc29sZS5sb2coYEJlc3QgcHJvZHVjdChzKTogJHtiZXN0UHJvZHVjdHMuam9pbignLCAnKX0gbWFkZSB3aXRoICR7cHJvZHVjdFRyYWNraW5nW2Jlc3RQcm9kdWN0c1swXV19IGZvcm11bGFlYCkKfQoKZnVuY3Rpb24gZmluZFByb2R1Y3RzKGVsZW0xLGVsZW0yKSB7CiAgbGV0IGZvdW5kRm9ybXVsYSA9IGZvcm11bGFlLmZpbmQoZm9ybXVsYSA9PiB7CiAgICBsZXQgZWxlbXMxID0gW2VsZW0xLGVsZW0yXS5zb3J0KCkKICAgIGxldCBlbGVtczIgPSBmb3JtdWxhLmVsZW1lbnRzLnNvcnQoKQogICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtpZiAoZWxlbXMxW2ldICE9PSBlbGVtczJbaV0pIHtyZXR1cm4gZmFsc2U7fX0KICAgIHJldHVybiB0cnVlOwogIH0pCiAgcmV0dXJuIHR5cGVvZiBmb3VuZEZvcm11bGEgPT0gJ3VuZGVmaW5lZCc/dW5kZWZpbmVkOmZvdW5kRm9ybXVsYS5wcm9kdWN0czsKfQoKZnVuY3Rpb24gc2VsZWN0RWxlbWVudChrZXkpIHsKICBpZiAoc2VsZWN0ZWRFbGVtZW50cy5pbmRleE9mKCIiKSA9PSAtMSkgewogICAgZWxlbWVudHNba2V5XS5zZWxlY3RlZCA9IHRydWU7CiAgICBlbGVtZW50c1tzZWxlY3RlZEVsZW1lbnRzWzBdXS5zZWxlY3RlZCA9IHNlbGVjdGVkRWxlbWVudHNbMF0gPT0gc2VsZWN0ZWRFbGVtZW50c1sxXSAvLyB0aGUgb2xkIHNlbGVjdGVkIGVsZW1lbnQgc3RheXMgc2VsZWN0ZWQgaWYgaXQgd2FzIGluIGJvdGggc2xvdHMKICAgIHNlbGVjdGVkRWxlbWVudHNbMF0gPSBzZWxlY3RlZEVsZW1lbnRzWzFdCiAgICBzZWxlY3RlZEVsZW1lbnRzWzFdID0ga2V5CiAgfQogIGVsc2UgewogICAgaWYgKHNlbGVjdGVkRWxlbWVudHNbMF0gPT0gIiIpIHtzZWxlY3RlZEVsZW1lbnRzWzBdID0ga2V5fQogICAgZWxzZSB7c2VsZWN0ZWRFbGVtZW50c1sxXSA9IGtleX0KICAgIGVsZW1lbnRzW2tleV0uc2VsZWN0ZWQgPSB0cnVlOwogIH0KICB1cGRhdGVTZWxlY3RlZERpc3BsYXkoKQogIHVwZGF0ZUVsZW1lbnRzKCkKfQoKZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWREaXNwbGF5KCkgewogIHNlbGVjdGVkRGlzcGxheS5pbm5lckhUTUwgPSBgJHtzZWxlY3RlZEVsZW1lbnRzWzBdPT0nJz8nX19fX18nOnNlbGVjdGVkRWxlbWVudHNbMF19ICsgJHtzZWxlY3RlZEVsZW1lbnRzWzFdPT0nJz8nX19fX18nOnNlbGVjdGVkRWxlbWVudHNbMV19YAp9CgpmdW5jdGlvbiB1cGRhdGVFbGVtZW50c0Rpc3BsYXkoKSB7CiAgbGV0IGVsZW1zTyA9IDAKICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaChrZXkgPT4ge2lmIChlbGVtZW50c1trZXldLm93bmVkKSB7ZWxlbXNPKyt9fSkKICBlbGVtZW50c0Rpc3BsYXkuaW5uZXJIVE1MID0gYCR7ZWxlbXNPfS8ke09iamVjdC5rZXlzKGVsZW1lbnRzKS5sZW5ndGh9YAp9CgpmdW5jdGlvbiBjb21iaW5lRWxlbWVudHMoKSB7CiAgaWYgKHNlbGVjdGVkRWxlbWVudHMuaW5kZXhPZigiIikgPT0gLTEpIHsKICAgIGxldCBwcm9kdWN0cyA9IGZpbmRQcm9kdWN0cyhzZWxlY3RlZEVsZW1lbnRzWzBdLHNlbGVjdGVkRWxlbWVudHNbMV0pCiAgICBpZiAodHlwZW9mIHByb2R1Y3RzICE9ICd1bmRlZmluZWQnKSB7cHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtlbGVtZW50c1twcm9kdWN0XS5vd25lZCA9IHRydWU7fSl9CiAgICBzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goa2V5ID0+IHtlbGVtZW50c1trZXldLnNlbGVjdGVkID0gZmFsc2U7fSkKICAgIHNlbGVjdGVkRWxlbWVudHMgPSBbJycsJyddCiAgICByZXN1bHREaXNwbGF5LmlubmVySFRNTCA9IGAke3R5cGVvZiBwcm9kdWN0cyA9PSAndW5kZWZpbmVkJz8nTm8gcHJvZHVjdCBmb3VuZCA6KCc6YENyZWF0ZWQgPHN0cm9uZz4ke3Byb2R1Y3RzLmpvaW4oJywgJyl9PC9zdHJvbmc+IWB9YAogICAgdXBkYXRlU2VsZWN0ZWREaXNwbGF5KCkKICAgIHVwZGF0ZUVsZW1lbnRzKCkKICAgIHVwZGF0ZUVsZW1lbnRzRGlzcGxheSgpCiAgfQp9CgpmdW5jdGlvbiBjaGFuZ2VDU1ModmFyaWFibGUsdmFsdWUpIHtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoKCItLSIpLmNvbmNhdCh2YXJpYWJsZSksdmFsdWUpfQp2YXIgdGhlbWUgPSAwCmZ1bmN0aW9uIHN3aXRjaFRoZW1lKCkgewogIHRoZW1lID0gKHRoZW1lKzEpJTIKICBjaGFuZ2VDU1MoJ2JnJyxbJyNmZmYnLCcjMDAwJ11bdGhlbWVdKQogIGNoYW5nZUNTUygnYmcyJyxbJyNkZGQnLCcjMjIyJ11bdGhlbWVdKQogIGNoYW5nZUNTUygnYmczJyxbJyM5OTknLCcjNDQ0J11bdGhlbWVdKQogIGNoYW5nZUNTUygndGV4dCcsWycjMDAwJywnI2ZmZiddW3RoZW1lXSkKfQoKZnVuY3Rpb24gc2F2ZSgpIHsKICBsZXQgZ2FtZVNhdmUgPSB7fQogIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKGtleSA9PiB7Z2FtZVNhdmVba2V5XSA9IGVsZW1lbnRzW2tleV0ub3duZWR9KQogIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCJnYW1lU2F2ZSIsIEpTT04uc3RyaW5naWZ5KGdhbWVTYXZlKSk7Cn0KCmZ1bmN0aW9uIGxvYWQoKSB7CiAgbGV0IHNhdmVkR2FtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oImdhbWVTYXZlIikpOwogIGlmIChzYXZlZEdhbWUpIHsKICAgIE9iamVjdC5rZXlzKHNhdmVkR2FtZSkuZm9yRWFjaChrZXkgPT4gewogICAgICBpZiAodHlwZW9mIGVsZW1lbnRzW2tleV0gIT0gJ3VuZGVmaW5lZCcpIHtlbGVtZW50c1trZXldLm93bmVkID0gc2F2ZWRHYW1lW2tleV19CiAgICB9KQogIH0KICB1cGRhdGVFbGVtZW50cygpCiAgdXBkYXRlRWxlbWVudHNEaXNwbGF5KCkKfQoKZmV0Y2hEYXRhKCkKCiAg`;
const _version = "V0.2"
if (btoa(document.body.querySelector("script").innerText) === _lastKnownHash) {
    save();

    let _usedHints = Number(localStorage.getItem("_hints")) ?? 0;

    const _elementsUnparsed = localStorage.getItem("gameSave");
    const _elements = JSON.parse(_elementsUnparsed);

    const _hackEls = [document.createElement("p"), document.createElement("button"), document.createElement("button"), document.createElement("button"), document.createElement("p"), document.createElement("p"),          document.createElement("br")];

    _hackEls[0].innerText = `Snail Elemental Hacks ${_version}:`;

    _hackEls[1].innerText = "Unlock all Elements";
    _hackEls[1].addEventListener("click", () => {
        _unlockAll();
    });

    _hackEls[2].innerText = "Reset collection";
    _hackEls[2].addEventListener("click", () => {
        _reset();
    });

    _hackEls[3].innerText = `Hint (${_usedHints} used)`;
    _hackEls[3].addEventListener("click", () => {
        _hackEls[4].innerText = _hint();
    });

    _hackEls[5].innerText = `Craftable Elements: Click to Refresh Craftable Elements!`;
    _hackEls[5].addEventListener("click", () => {
        _hackEls[5].innerText = `Craftable Elements:\n${_getCraftable().map(_el => _el.products.join(" and ")).join("\n")}`
    });

    _hackEls.forEach(_el => {
        document.body.append(document.createElement("br"), _el);
    });

    styles.push(
        `.element {
            width: 3em;
            height: 3em;
            padding: 0.5em;
            border: 0.05em solid;
        }`
    );

    function _unlockAll() {
        Object.keys(_elements).forEach((_element) => {
            _elements[_element] = true;
        });

        localStorage.setItem("gameSave", JSON.stringify(_elements));

        load();
        window.scrollTo(0, document.body.scrollHeight);
    }

    function _reset() {
        Object.keys(_elements).forEach(_element => {
            _elements[_element] = false;
        });

        basicElements.forEach(_el => {
            _elements[_el] = true;
        });

        localStorage.setItem("gameSave", JSON.stringify(_elements));
        localStorage.setItem("_hints", 0);
        _usedHints = 0;
        _hackEls[3].innerText = `Hint (0 used)`;
        _hackEls[4].innerText = "";

        load();
    }

    function _getElBy(discovered = true) {
        const els = [];
        Object.keys(elements).forEach((el) => {
            if (elements[el].owned === discovered) {
                els.push(el);
            }
        });
        return els;
    }

    function _getCraftable() {
        const _undis = new Set(_getElBy(false));
        const _dis = new Set(_getElBy(true));

        const _craftable = formulae.filter((_el) => {
            if (_dis.has(_el.elements[0]) && _dis.has(_el.elements[1]) && _undis.has(_el.products[0])) {
                return _el;
            }
        });
        return _craftable;
    }

    function _hint() {
        const _els = _getCraftable();
        if (_els.length) {
            const _random = _els[Math.floor(Math.random() * _els.length)];

            const _string = _random["products"].join(" and ") + " = " + _random["elements"][0] + " + " + _random["elements"][1];

            ++_usedHints;
            localStorage.setItem("_hints", _usedHints);
            _hackEls[3].innerText = `Hint (${_usedHints} used)`;

            return _string;
        }
        else {
            return "You have discovered all elements!";
        }
        function switchStyle() {
            style = (style + 1) == styles.length ? 0 : style + 1;
            document.head.getElementsByTagName("style")[0].innerHTML = styles[style];
        }
    }
    console.log("Injected Successfully!")
}
else {
    console.warn("Elemental Hacks refused to run, as they are outdated. Call the _showAdvanced function for details");
    function _showAdvanced() {
        console.log(`Elemental hacks ${_version}`);
        console.log(`=====================`);
        console.log(`Last known hash (version of Elemental): ${_lastKnownHash}`);
    }
}